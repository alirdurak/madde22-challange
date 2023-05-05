import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearch2Fill } from "react-icons/ri";

export default function SearchInput() {
  return (
    <InputGroup
      width="200px"
      height="48px"
      mt="16px"
      mr="80px"
      background="rgba(255, 255, 255, 0.3);"
      display={{ base: "none", lg: "block" }}
      flexDirection="row"
    >
      <InputLeftElement pointerEvents="none" children={<RiSearch2Fill />} />
      <Input
        focusBorderColor="main.2"
        borderRadius="0px"
        placeholder="Etkinlik Ara"
      />
    </InputGroup>
  );
}
