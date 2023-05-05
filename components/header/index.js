import Image from "next/image";
import Exclude from "../../public/Exclude.svg";
import { Box, Text } from "@chakra-ui/react";
export default function Header() {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mt={37}
    >
      <Box display={{ base: "none", md: "block" }}>
        <Image src={Exclude}></Image>
      </Box>
      <Text fontSize={{ md: "32px", base: "24px" }} mt={55} fontWeight={700}>
        ETKİNLİKLER
      </Text>
    </Box>
  );
}
