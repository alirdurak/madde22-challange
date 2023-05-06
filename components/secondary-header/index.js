import { Flex } from "@chakra-ui/react";
import FilterMenu from "./filter-menu";
import Calender from "./calender";

export default function SecondaryHeader() {
  return (
    <Flex
      justify="space-between"
      align="center"
      backgroundColor="secondary.6"
      width="100%"
      height="52px"
      margin="0px"
      position="sticky"
      right="0px"
      top="0px"
      zIndex={9999999}
    >
      <FilterMenu />
      <Calender />
    </Flex>
  );
}
