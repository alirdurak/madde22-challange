import { Stack, Button } from "@chakra-ui/react";

export default function FilterButton() {
  return (
    <Stack
      mt={{ base: "52px", md: "67px" }}
      direction="row"
      spacing={{ base: "20px", md: "30px" }}
      justify="center"
    >
      <Button
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        fontWeight="400"
        fontSize="16px"
        variant="unstyled"
        textAlign="center"
        paddingBottom={{ base: "16px", md: "22px" }}
        transition="all ease-in 0.15s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
      >
        Tüm Etkinlikler
      </Button>
      <Button
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        fontWeight="400"
        fontSize="16px"
        variant="unstyled"
        textAlign="center"
        paddingBottom={{ base: "16px", md: "22px" }}
        transition="all ease-in 0.15s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
      >
        Tiyatro
      </Button>
      <Button
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        fontWeight="400"
        fontSize="16px"
        variant="unstyled"
        textAlign="center"
        paddingBottom={{ base: "16px", md: "22px" }}
        transition="all ease-in 0.15s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
      >
        Konser
      </Button>
      <Button
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        fontWeight="400"
        fontSize="16px"
        variant="unstyled"
        textAlign="center"
        paddingBottom={{ base: "16px", md: "22px" }}
        transition="all ease-in 0.15s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
      >
        Stand Up
      </Button>
      <Button
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        fontWeight="400"
        fontSize="16px"
        variant="unstyled"
        textAlign="center"
        paddingBottom={{ base: "16px", md: "22px" }}
        transition="all ease-in 0.15s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
      >
        Sinema
      </Button>
      <Button
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        fontWeight="400"
        fontSize="16px"
        variant="unstyled"
        textAlign="center"
        paddingBottom={{ base: "16px", md: "22px" }}
        transition="all ease-in 0.15s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
      >
        Çocuk
      </Button>
    </Stack>
  );
}
