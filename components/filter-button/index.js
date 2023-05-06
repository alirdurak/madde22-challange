import { Flex, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { clearFilter, filterEventsType } from "@/redux/card-slice";
import { useState } from "react";
export default function FilterButton() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const handleFilter = (type) => {
    dispatch(filterEventsType(type));
    setFilter(type);
  };
  const handleClear = () => {
    dispatch(clearFilter());
    setFilter();
  };
  return (
    <Flex
      direction="row"
      gap={{ base: "20px", lg: "30px" }}
      justify="center"
      mt={{ base: "0px", lg: "27px" }}
      ml={{ base: "16px", lg: "15rem" }}
      wrap="nowrap"
    >
      <Button
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        fontWeight="400"
        fontSize="16px"
        variant="unstyled"
        textAlign="center"
        paddingBottom={{ base: "16px", md: "22px" }}
        transition="all ease-in-out 0.3s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
        _hover={{
          color: "main.2",
        }}
        onClick={handleClear}
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
        transition="all ease-in-out 0.3s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
        _hover={{
          color: "main.2",
        }}
        onClick={() => handleFilter("tiyatro")}
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
        transition="all ease-in-out 0.3s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
        _hover={{
          color: "main.2",
        }}
        onClick={() => handleFilter("konser")}
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
        transition="all ease-in-out 0.3s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
        _hover={{
          color: "main.2",
        }}
        onClick={() => handleFilter("stand up")}
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
        transition="all ease-in-out 0.3s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
        _hover={{
          color: "main.2",
        }}
        onClick={() => handleFilter("sinema")}
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
        transition="all ease-in-out 0.3s"
        borderRadius="0px"
        _focus={{
          fontWeight: "700",
          color: "main.2",
          borderBottom: "solid 3px ",
          borderColor: "main.2",
        }}
        _hover={{
          color: "main.2",
        }}
        onClick={() => handleFilter("çocuk")}
      >
        Çocuk
      </Button>
    </Flex>
  );
}
