import { Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction="column"
      wrap="wrap"
      padding="1.5rem"
      gap={3}
    >
      <Text>Devoloped by Ali Rıza Durak</Text>
      <Flex align="center">
        <Link href="https://github.com/alirdurak" isExternal mr={4}>
          <FaGithub size={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/alir%C4%B1zadurak/" isExternal>
          <FaLinkedin size={30} />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Footer;
