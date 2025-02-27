import { deleteFile, updateFile } from "./Api";
import { ESortTypes } from "./RecentFilesDrawer/types";
import { workflowsTable, userSettingsTable } from "./db-tables/WorkspaceDB";
import {
  generateFilePathAbsolute,
  saveJsonFileMyWorkflows,
} from "./db-tables/DiskFileUtils";
import { Folder, Workflow, EShortcutKeys } from "./types/dbTypes";
// @ts-expect-error ComfyUI import
import { app } from "/scripts/app.js";
import {
  COMFYSPACE_TRACKING_FIELD_NAME,
  LEGACY_COMFYSPACE_TRACKING_FIELD_NAME,
} from "./const";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let LiteGraph: any, LGraph: any, LGraphCanvas: any;

// copied from app.js
function sanitizeNodeName(string: string): string {
  const entityMap: Record<string, string> = {
    "&": "",
    "<": "",
    ">": "",
    '"': "",
    "'": "",
    "`": "",
    "=": "",
  };
  return String(string).replace(/[&<>"'`=]/g, function fromEntityMap(s) {
    return entityMap[s];
  });
}
export function findMissingNodes(): string[] {
  const missingNodeTypes = [];
  for (const n of app.graph._nodes) {
    // Patch T2IAdapterLoader to ControlNetLoader since they are the same node now
    if (n.type == "T2IAdapterLoader") n.type = "ControlNetLoader";
    if (n.type == "ConditioningAverage ") n.type = "ConditioningAverage"; //typo fix
    if (n.type == "SDV_img2vid_Conditioning")
      n.type = "SVD_img2vid_Conditioning"; //typo fix
    // Find missing node types
    if (!(n.type in LiteGraph.registered_node_types)) {
      n.type = sanitizeNodeName(n.type);
      missingNodeTypes.push(n.type);
    }
  }
  return missingNodeTypes;
}

export function toFileNameFriendly(str: string) {
  // Keep only alphanumeric characters (including characters from other languages), underscores, and hyphens
  // The \w character class in JavaScript's regex includes [A-Za-z0-9_] and Unicode characters (like Chinese, Japanese)
  // str = str.replace(/[^\w-]/g, "");
  str = str.replace(/[\\/:*?"<>|]/g, "_");

  return str.trim();
}

function isValidFileName(fileName: string) {
  // Check for empty string
  if (!fileName || fileName.length === 0) {
    return false;
  }

  // Windows reserved characters
  // eslint-disable-next-line no-control-regex
  const windowsInvalidChars = /[<>:"/\\|?*\x00-\x1F]/;
  if (windowsInvalidChars.test(fileName)) {
    return false;
  }

  // Windows reserved names
  const windowsReservedNames = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
  if (windowsReservedNames.test(fileName)) {
    return false;
  }

  // Check for macOS restricted character (colon)
  if (fileName.includes(":")) {
    return false;
  }

  // Check for trailing periods or spaces (Windows restriction)
  if (/[. ]$/.test(fileName)) {
    return false;
  }

  // Length check (general precaution)
  // if (fileName.length > 255) {
  //   return false;
  // }

  return true;
}

export function formatTimestamp(
  unixTimestamp: number,
  showHourMinue: boolean = true,
  showSec: boolean = false,
) {
  // Create a new Date object from the UNIX timestamp
  const date = new Date(unixTimestamp);

  // Get the day, month, year, hours, and minutes from the Date object
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // Format the date and time string
  const res = `${month}-${day}-${year}`;
  if (showHourMinue) {
    return res + ` ${hours}:${minutes}`;
  }
  if (showSec) {
    return res + `:${seconds}`;
  }
  return res;
}

/**
 * Sort workspace list data
 * @param flows Data that needs to be sorted
 * @param sortType The type of sorting
 * @returns sorted data
 */
export function sortFlows(
  flows: Workflow[] = [],
  sortType: ESortTypes = ESortTypes.RECENTLY_MODIFIED,
) {
  const copyFlows = [...flows];
  if (copyFlows.length) {
    switch (sortType) {
      case ESortTypes.AZ:
        copyFlows.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case ESortTypes.ZA:
        copyFlows.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case ESortTypes.RECENTLY_MODIFIED:
        copyFlows.sort((a, b) => b.updateTime - a.updateTime);
        break;
      case ESortTypes.OLDEST_MODIFIED:
        copyFlows.sort((a, b) => a.updateTime - b.updateTime);
        break;
    }
  }

  return copyFlows;
}
export async function validateOrSaveAllJsonFileMyWorkflows(
  deleteEmptyFolder = false,
) {
  const twoWaySync = await userSettingsTable?.getSetting("twoWaySync");
  if (twoWaySync) return; // disable this function in two way sync mode
  const flowList = (await workflowsTable?.listAll()) ?? [];
  for (const workflow of flowList) {
    const fullPath = await generateFilePathAbsolute(workflow);
    if (workflow.filePath != fullPath) {
      // file path changed
      workflow.filePath != null &&
        (await deleteFile(workflow.filePath, deleteEmptyFolder));
      await saveJsonFileMyWorkflows(workflow);
    }
  }
}

export const sortFileItem = (
  items: Array<Workflow | Folder>,
  sortType: ESortTypes = ESortTypes.RECENTLY_MODIFIED,
) => {
  const copyFlows = [...items];
  switch (sortType) {
    case ESortTypes.AZ:
      copyFlows.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case ESortTypes.ZA:
      copyFlows.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case ESortTypes.RECENTLY_MODIFIED:
      copyFlows.sort((a, b) => b.updateTime - a.updateTime);
      break;
    case ESortTypes.OLDEST_MODIFIED:
      copyFlows.sort((a, b) => a.updateTime - b.updateTime);
      break;
  }
  return copyFlows;
};

export function insertWorkflowToCanvas(json: string, insertPos?: number[]) {
  let graphData = JSON.parse(json);
  if (typeof structuredClone === "undefined") {
    graphData = JSON.parse(JSON.stringify(graphData));
  } else {
    graphData = structuredClone(graphData);
  }

  let tempGraph = new LGraph();
  const hiddenCanvas = document.createElement("canvas");
  hiddenCanvas.style.display = "none"; // Make it hidden
  document.body.appendChild(hiddenCanvas); // Append to the body to make it part of the DOM
  let tempCanvas = new LGraphCanvas(hiddenCanvas, tempGraph);

  const prevClipboard = localStorage.getItem("litegrapheditor_clipboard");
  const prevGraph = app.graph;
  const prevCanvas = app.canvas;
  app.canvas = tempCanvas;
  app.graph = tempGraph;
  tempGraph.configure(graphData);
  app.canvas.copyToClipboard(tempGraph._nodes);

  // clear the tempGraph and remove the hiddenCanvas
  tempCanvas.graph.clear();
  document.body.removeChild(hiddenCanvas);

  app.graph = prevGraph;
  app.canvas = prevCanvas;
  const priorPos = app.canvas.graph_mouse;
  if (insertPos) {
    insertPos[0] -= 15;
    insertPos[1] -= 15;
    app.canvas.graph_mouse = insertPos;
  }
  app.canvas.pasteFromClipboard();
  app.canvas.graph_mouse = priorPos;
  if (prevClipboard) {
    localStorage.setItem("litegrapheditor_clipboard", prevClipboard);
  }
  // Nullify the temporary graph and canvas references for garbage collection
  tempGraph = null;
  tempCanvas = null;
}

export const matchShortcut = async (event: KeyboardEvent) => {
  const shortcuts =
    (await userSettingsTable?.getSetting("shortcuts")) ??
    userSettingsTable?.defaultSettings.shortcuts;

  if (!shortcuts) return false;

  for (const shortcutType in shortcuts) {
    const shortcutString = shortcuts[shortcutType as EShortcutKeys];
    const keys = shortcutString.split("+");
    const pressedKeys: Record<string, boolean> = {
      Control: event.ctrlKey,
      Shift: event.shiftKey,
      Alt: event.altKey,
      Command: event.metaKey,
      [event.key.toUpperCase()]: true,
    };
    for (const key in pressedKeys) {
      if (!pressedKeys[key]) {
        delete pressedKeys[key];
      }
    }
    if (
      keys.length === Object.keys(pressedKeys).length &&
      keys.every((key) => pressedKeys[key])
    ) {
      return shortcutType;
    }
  }
};

export function isImageFormat(fileName: string) {
  const imageExtensions = ["png", "jpg", "jpeg", "gif", "bmp", "webp"];
  const extension = fileName.split(".").pop();
  return extension != null && imageExtensions.includes(extension);
}
export function isVideoFormat(fileName: string) {
  const videoExtensions = ["mp4", "webm", "ogg"];
  const extension = fileName.split(".").pop();
  return extension != null && videoExtensions.includes(extension);
}

export function getFileUrl(relativePath: string) {
  return `/workspace/view_media?filename=${relativePath}`;
}

export function getWorkflowIdInUrlHash() {
  const hashArr = window.location.hash.slice(1).split("/");
  const workspaceId = hashArr.find((h) => h.includes("workspaceId@"));
  return workspaceId ? workspaceId.split("@")[1] : null;
}

/**
 * Generate url hash containing workflowId;
 * If workspaceId@ exists, replace it, if it does not exist, append it.
 * This operation will not damage the original hash.
 */
export function generateUrlHashWithFlowId(id: string) {
  const hashArr = window.location.hash.slice(1).split("/");
  const workspaceIdIndex = hashArr.findIndex((h) => h.includes("workspaceId@"));
  const newWorkflowId = `workspaceId@${id}`;
  if (workspaceIdIndex >= 0) {
    hashArr[workspaceIdIndex] = newWorkflowId;
  } else {
    hashArr.push(newWorkflowId);
  }
  return `${hashArr.join("/")}`;
}

export const openWorkflowInNewTab = (workflowID: string) => {
  const newHash = generateUrlHashWithFlowId(workflowID);
  window.open(`${window.location.origin}/#${newHash}`);
};

export async function rewriteAllLocalFiles() {
  const flowList = (await workflowsTable?.listAll()) ?? [];
  for (const workflow of flowList) {
    try {
      const fullPath = await generateFilePathAbsolute(workflow);
      const flow = JSON.parse(workflow.json);
      flow.extra[COMFYSPACE_TRACKING_FIELD_NAME] = {
        id: workflow.id,
        name: workflow.name,
      };
      delete flow.extra[LEGACY_COMFYSPACE_TRACKING_FIELD_NAME];
      fullPath && (await updateFile(fullPath, JSON.stringify(flow)));
    } catch (error) {
      console.error(error);
    }
  }
}
