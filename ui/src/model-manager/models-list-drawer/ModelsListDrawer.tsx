import {
  Box,
  Card,
  Flex,
  Heading,
  Spinner,
  Portal,
  Input,
  Select,
} from "@chakra-ui/react";
import Fuse from "fuse.js/min-basic";
import { useEffect, useState } from "react";
import { ModelsTags } from "./ModelsTags";
import { ModelsList } from "./ModelsList";
// @ts-expect-error ComfyUI imports
import { app } from "/scripts/app.js";
import InstallModelsButton from "../install-models/InstallModelsButton";
import { ModelsListRespItem } from "../types";
import { useUpdateModels } from "../hooks/useUpdateModels";
import { DRAWER_Z_INDEX } from "../../const";
import ShowNsfwModelThumbnailSettings from "../../settings/ShowNsfwModelThumbnailSettings";
interface Props {
  onClose: () => void;
}

export default function ModelsListDrawer({ onClose }: Props) {
  const [selectedModel, setSelectedModel] = useState("checkpoints");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const { loading, modelTypeList, modelsList } = useUpdateModels();

  // current render models
  const [curModelList, setCurModelList] = useState<ModelsListRespItem[]>([]);

  // filter by model type
  useEffect(() => {
    let res: ModelsListRespItem[] = [];
    if (!searchQuery.length) {
      res = modelsList
        .filter((item) => item.model_type === selectedModel)
        .sort((a, b) => {
          if (sortBy === "name") {
            return a.model_name.localeCompare(b.model_name);
          } else {
            return b.date.getTime() - a.date.getTime();
          }
        });
    } else {
      const fuse = new Fuse(modelsList, { keys: ["model_name"] });
      const results = fuse.search(searchQuery);
      res = results.map((result) => result.item);
    }
    setCurModelList(res);
  }, [selectedModel, modelsList, searchQuery, sortBy]);

  useEffect(() => {
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, []);

  const DRAWER_WIDTH = 440;

  const renderContent = () => {
    return (
      <>
        <Flex gap={4} justifyContent={"center"} alignItems={"center"} mb={1}>
          <Input
            size={"sm"}
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Flex>
        <Flex gap={4} justifyContent={"center"} alignItems={"center"} mb={1}>
          Sort By
          {searchQuery.length ? (
            " Search"
          ) : (
            <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="date">Date</option>
            </Select>
          )}
          <ShowNsfwModelThumbnailSettings />
        </Flex>
        {!searchQuery.length && (
          <ModelsTags
            modelTypeList={modelTypeList}
            setSelectedModel={setSelectedModel}
            selectedModel={selectedModel}
          />
        )}
        <ModelsList list={curModelList} />
        {loading && (
          <Flex justifyContent={"center"} alignItems={"center"} height={"100%"}>
            <Spinner />
          </Flex>
        )}
      </>
    );
  };

  return (
    <Portal>
      <Box style={{ width: DRAWER_WIDTH }}>
        <Card
          width={DRAWER_WIDTH}
          height={"100vh"}
          p={4}
          gap={2}
          position={"fixed"}
          top={0}
          left={0}
          shadow={"xl"}
          zIndex={DRAWER_Z_INDEX}
          overflowY={"auto"}
          whiteSpace={"nowrap"}
        >
          <Flex justifyContent={"space-between"} alignContent={"center"} py={3}>
            <Heading size={"md"} mr={2}>
              Models
            </Heading>

            <InstallModelsButton />
          </Flex>

          {renderContent()}
        </Card>
      </Box>
    </Portal>
  );
}
