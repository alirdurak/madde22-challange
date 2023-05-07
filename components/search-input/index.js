import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearch2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { searchEvents } from "@/redux/card-slice";

export default function SearchInput() {
  const dispatch = useDispatch();
  // search fonksiyonu için handle methodu
  const handleChange = (e) => [dispatch(searchEvents(e.target.value))];
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
        onChange={handleChange}
      />
    </InputGroup>
  );
}
