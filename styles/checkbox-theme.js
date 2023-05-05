import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import CheckboxIcon from "./checkbox-icon";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    padding: 0, // change the padding of the control
    borderRadius: 0, // change the border radius of the control
    width: "20px",
    height: "20px",
    border: "1px solid  #DEDEDE",
  },
  icon: CheckboxIcon,
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
