import {
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  Icon,
  Box,
  Divider,
  Checkbox,
} from "@chakra-ui/react";

export default function FilterMenu() {
  return (
    <Box ml={{ base: "16px", lg: "83px" }}>
      <Menu closeOnSelect={false}>
        <MenuButton
          fontSize="16px"
          fontWeight="400"
          w="83px"
          h="26px"
          display="flex"
          alignItems="center"
          _active={{
            color: "main.2",
          }}
          leftIcon={
            <Icon>
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2" cy="2" r="1.5" fill="#FF0D87" stroke="#FF0D87" />
                <circle cx="8" cy="9" r="1.5" fill="#FF0D87" stroke="#FF0D87" />
                <circle
                  cx="2"
                  cy="16"
                  r="1.5"
                  fill="#FF0D87"
                  stroke="#FF0D87"
                />
              </svg>
            </Icon>
          }
          variant="unstyled"
          as={Button}
        >
          Filtreler
        </MenuButton>
        <MenuList
          border="0px"
          borderRadius="0px"
          filter="drop-shadow(0px 4px 50px rgba(81, 81, 81, 0.2))"
          mt="5px"
          w="290px"
          h="450px"
        >
          <MenuOptionGroup
            fontSize="16px"
            title="Etkinlik Mekanı"
            type="checkbox"
            margin="32px 136px 18px 32px"
            padding="0px"
            fontWeight="700"
          >
            <Checkbox
              maxWidth="226px"
              fontSize="16px"
              display="inline"
              margin="0px 0px 0px 31px"
              padding="0px 0px 0px 0px"
              value="hall"
              colorScheme="pink"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Maximum Uni Hall
            </Checkbox>
            <Divider
              borderColor="secondary.6"
              margin="9px 0px 9px 32px"
              w="226px"
            />
            <Checkbox
              maxWidth="226px"
              height="26px"
              display="inline"
              margin="0px 0px 0px 31px"
              padding="0px 0px 0px 0px"
              value="box"
              colorScheme="pink"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Maximum Uni Box
            </Checkbox>
            <Divider
              borderColor="secondary.6"
              margin="9px 0px 9px 32px"
              w="226px"
            />
            <Checkbox
              maxWidth="226px"
              display="inline"
              margin="0px 0px 0px 31px"
              padding="0px 0px 0px 0px"
              value="lounge"
              colorScheme="pink"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Maximum Uni Lounge
            </Checkbox>
            <Divider
              borderColor="secondary.6"
              margin="9px 0px 9px 32px"
              w="226px"
            />
            <Checkbox
              maxWidth="226px"
              display="inline"
              margin="0px 0px 0px 31px"
              padding="0px 0px 0px 0px"
              value="açıkHava"
              colorScheme="pink"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Maximum Uni Açık Hava
            </Checkbox>
            <Divider
              borderColor="secondary.6"
              margin="9px 0px 9px 32px"
              w="226px"
            />
            <Checkbox
              maxWidth="226px"
              display="inline"
              margin="0px 0px 0px 31px"
              padding="0px 0px 0px 0px"
              value="bahçe"
              colorScheme="pink"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Bahçe Fuaye
            </Checkbox>
          </MenuOptionGroup>

          <MenuOptionGroup
            fontSize="16px"
            margin="29px 148px 18px 32px"
            padding="0px"
            title="Etkinlik Tarihi"
            type="checkbox"
          >
            <Checkbox
              maxWidth="226px"
              display="inline"
              margin="0px 0px 0px 31px"
              padding="0px 0px 0px 0px"
              value="güncel"
              colorScheme="pink"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Güncel Etkinlikler
            </Checkbox>
            <Divider
              borderColor="secondary.6"
              margin="9px 0px 9px 32px"
              w="226px"
            />
            <Checkbox
              maxWidth="226px"
              display="inline"
              margin="0px 0px 0px 31px"
              padding="0px 0px 0px 0px"
              value="geçmiş"
              colorScheme="pink"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Geçmiş Etkinlikler
            </Checkbox>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
}
