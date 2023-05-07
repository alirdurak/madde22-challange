import EventCard from "@/components/card";
import { Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "@/redux/card-slice";
import { useEffect } from "react";

export default function CardContainer() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.cardSlice.finalFilteredEvents);
  // event verilerinin sayfa render edildiğinde fetch edilmesi için kullanılan useEffect hooku
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  return (
    <Flex mt={{ base: "16px", lg: "60px" }} flexDir="column" gap="16px">
      {events.map((item) => (
        <EventCard item={item} />
      ))}
    </Flex>
  );
}
