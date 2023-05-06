import {
  CardBody,
  Card,
  Heading,
  Stack,
  Image as Img,
  Text,
  CardFooter,
  Button,
  Box,
} from "@chakra-ui/react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

export default function EventCard({ item }) {
  return (
    <>
      <Card
        role="group"
        direction={{ base: "column", lg: "row" }}
        overflow="hidden"
        variant="outline"
        border="1px solid"
        borderColor="secondary.2"
        background="transparent"
        borderRadius="0px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        width={{ base: "360px", lg: "1064px" }}
        height={{ base: "410px", lg: "210px" }}
        transition="all ease-in-out 0.3s"
        _hover={{
          backgroundColor: "white",
          boxShadow: "0px 0px 50px rgba(81, 81, 81, 0.2)",
        }}
      >
        <Text
          position="absolute"
          zIndex={4}
          backgroundColor="secondary.9"
          left={{ lg: "92px", base: "-16px" }}
          top={{ base: "16px", lg: "32px" }}
          h="22px"
          padding="0px 22px"
          fontWeight="700"
          color="white"
          fontSize="14px"
        >
          {item.event_type}
        </Text>
        <Box
          width={{ base: "100%", lg: "200px" }}
          height={{ base: "212px", lg: "100%" }}
          backgroundColor="main.1"
          position="absolute"
        ></Box>
        <Box
          position="absolute"
          left={{ lg: "37px", base: "109px" }}
          top={{ base: "5px", lg: "45px" }}
          w={{ lg: "auto" }}
          h={{ base: "40px", lg: "auto" }}
          fontFamily="Acme"
          fontSize="16px"
          textAlign="center"
          lineHeight="24px"
          fontWeight="400"
          display="flex"
          flexDir={{ base: "row", lg: "column" }}
          gap="6px"
        >
          <Text
            color={{ base: "white", lg: "main.2" }}
            fontSize={{ base: "32px", lg: "16px" }}
            padding="0px"
          >
            {item.date.day}
          </Text>
          <Text
            fontWeight={{ base: "700", lg: "inherit" }}
            color={{ base: "white", lg: "main.2" }}
          >
            {item.date.month}
          </Text>
          <Text color={{ base: "secondary.2", lg: "main.2" }}>Salı</Text>
          <Text color={{ base: "secondary.5", lg: "main.2" }} padding="0px">
            {item.date.week_day}
          </Text>
        </Box>
        <Img
          minWidth={{ base: "311px", lg: "308px" }}
          height={{ base: "173", lg: "172" }}
          margin={{ base: "54px 16px 0px 16px", lg: "16px 0px 16px 108px" }}
          src={item.event_image}
          position="relative"
        />

        <Stack flexDir={{ base: "column", lg: "row" }}>
          <CardBody mt="29px 0px 0px 16px">
            <Heading
              mb="10px"
              fontSize="18px"
              _groupHover={{
                color: "secondary.8",
              }}
            >
              {item.event_name}
            </Heading>
            <Box alignItems="center" display={{ base: "none", lg: "flex" }}>
              <Box
                w="24px"
                h="24px"
                textAlign="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99936 -0.000654058C4.34035 -0.00966691 3.68627 0.118441 3.07572 0.376111C2.46517 0.633782 1.91052 1.01579 1.44448 1.49961C0.978449 1.98343 0.610477 2.55925 0.362277 3.19309C0.114078 3.82694 -0.00932146 4.50598 -0.000639881 5.19014C-0.000639881 9.08323 4.52019 13.5387 4.70769 13.7333L4.99936 13.9993L5.29103 13.7333C5.47853 13.5387 9.99936 9.08323 9.99936 5.19014C10.008 4.50598 9.88464 3.82694 9.63644 3.19309C9.38824 2.55925 9.02027 1.98343 8.55424 1.49961C8.08821 1.01579 7.53355 0.633782 6.923 0.376111C6.31245 0.118441 5.65837 -0.00966691 4.99936 -0.000654058ZM4.99936 6.9204C4.66972 6.9204 4.34749 6.81892 4.07341 6.6288C3.79933 6.43868 3.58571 6.16845 3.45956 5.85228C3.33341 5.53612 3.30041 5.18822 3.36472 4.85258C3.42903 4.51694 3.58776 4.20864 3.82085 3.96666C4.05394 3.72467 4.35091 3.55988 4.67421 3.49312C4.99751 3.42636 5.33262 3.46062 5.63717 3.59158C5.94171 3.72254 6.20201 3.94431 6.38514 4.22886C6.56828 4.5134 6.66603 4.84792 6.66603 5.19014C6.66603 5.64903 6.49043 6.08913 6.17787 6.41362C5.86531 6.73811 5.44139 6.9204 4.99936 6.9204Z"
                    fill="#9C9C9C"
                  />
                </svg>
              </Box>
              <Text color="secondary.5" fontSize="14px">
                {item.location}
              </Text>
            </Box>

            <Text
              padding="0px"
              fontSize="16px"
              mt={{ base: "0px", lg: "10px" }}
              noOfLines={{ base: "1", lg: "auto" }}
              height={{ base: "26px", lg: "auto" }}
            >
              {item.event_description}
            </Text>
          </CardBody>

          <CardFooter
            mt={{ base: "10px", lg: "0px" }}
            mb={{ base: "19px", lg: "40px" }}
            display="flex"
            alignItems={{ base: "center", lg: "flex-start" }}
            justifyContent="center"
            flexDir={{ base: "row", lg: "column" }}
            height={{ lg: "100%" }}
          >
            <Button
              borderRadius="0px"
              backgroundColor="main.2"
              w={{ base: "147px", lg: "166px" }}
              h="48px"
              variant="unstyled"
              color="white"
              cursor="pointer"
              fontWeight="700"
              mt={{ lg: "-40px" }}
              _hover={{
                backgroundColor: "secondary.9",
              }}
            >
              Bilet Al
            </Button>
            <Button
              width="135px"
              h="26px"
              variant="unstyled"
              textAlign="center"
              alignItems="center"
              display="flex"
              leftIcon={<MdOutlineAddCircleOutline />}
              mt={{ lg: "10px" }}
              _hover={{
                color: "secondary.9",
              }}
            >
              Takvime Ekle
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
