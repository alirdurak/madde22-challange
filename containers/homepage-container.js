import FilterButton from "@/components/filter-button";
import SearchInput from "@/components/search-input";
import { Flex, Box } from "@chakra-ui/react";
import SecondaryHeader from "@/components/secondary-header";

import CardContainer from "./card-container";
export default function HomeContainer() {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Flex
        width="100%"
        direction="row"
        justifyContent={{
          base: "flex-start",
          md: "center",
          lg: "space-between",
        }}
        mt={{ base: "52px", md: "40px" }}
      >
        <Box
          display={{
            base: "none",
            lg: "block",
          }}
        />
        <FilterButton />
        <SearchInput />
      </Flex>
      <SecondaryHeader />
      <CardContainer />
    </Box>
  );
}
