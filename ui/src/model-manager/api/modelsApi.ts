// @ts-expect-error ComfyUI imports
import { api } from "/scripts/api.js";

export type InstallModelsApiInput = {
  save_path: string;
  filename: string;
  url: string;
  file_hash?: string;
};
let cancelInstall = false;

export const setCancelInstall = (value: boolean) => {
  cancelInstall = value;
};
export const installModelsApi = async (target: InstallModelsApiInput) => {
  try {
    const response = await api.fetchApi("/model_manager/install_model", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(target),
    });
    // ****NON Streaming version*****
    const text = await response.text();
    window.dispatchEvent(
      new CustomEvent("model_install_message", {
        detail: text,
      }),
    );
    // **** Streaming version*****
    // const reader = response.body.getReader();
    // while (true) {
    //   if (cancelInstall) {
    //     break;
    //   }
    //   const { done, value } = await reader.read();
    //   if (done) break;
    //   const text = new TextDecoder().decode(value);
    //   window.dispatchEvent(
    //     new CustomEvent("model_install_message", {
    //       detail: text,
    //     })
    //   );
    // }
  } catch (error) {
    console.error("Failed to connect to the server:", error);
  }
};
