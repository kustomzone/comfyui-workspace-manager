import { FC } from "react";
import { Flex, Input } from "@chakra-ui/react";

export const InputBase: FC<FormItem> = (props) => {
  return (
    <Flex gap={2}>
      <Flex gap={1} alignItems={"center"} flexBasis={"200px"}>
        {props.label ?? props.name}
      </Flex>
      <Input value={props.value} />
    </Flex>
  );
};
