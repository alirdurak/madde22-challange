import FilterButton from "@/components/filter-button";
import SearchInput from "@/components/search-input";
import { Flex, Box } from "@chakra-ui/react";
import SecondaryHeader from "@/components/secondary-header";
export default function HomeContainer() {
  return (
    <Box>
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
    </Box>
  );
}
