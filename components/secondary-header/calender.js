import { Flex, Icon, Text } from "@chakra-ui/react";
export default function Calender() {
  return (
    <Flex
      gap="15px"
      alignItems="center"
      mr={{ base: "17px", lg: "78px" }}
      cursor="pointer"
      transition="all ease-in-out 0.3s"
      _hover={{
        color: "secondary.9",
      }}
    >
      <Icon>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7.63636V18H0V7.63636H20ZM5 0V1.63636H3.88889V4.36364H5V1.63636H9.44444V0H10.5556V1.63636H9.44444V4.36364H10.5556V1.63636H15V0H16.1111V1.63636H15V4.36364H16.1111V1.63636H20V6.54545H0V1.63636H3.88889V0H5Z"
            fill="black"
          />
        </svg>
      </Icon>
      <Text>Takvimde Gör</Text>
    </Flex>
  );
}
