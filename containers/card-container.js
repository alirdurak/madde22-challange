import EventCard from "@/components/card";
import { Flex } from "@chakra-ui/react";

export default function CardContainer() {
  return (
    <Flex mt={{ base: "16px", lg: "60px" }} flexDir="column" gap="16px">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </Flex>
  );
}
