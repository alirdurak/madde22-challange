import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { checkboxTheme } from "@/styles/checkbox-theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store.js";
import Layout from "@/components/layout";
// chakra ui custom theme
const theme = extendTheme({
  colors: {
    main: {
      1: "#000000",
      2: "#FF0D87",
      3: "#ffffff",
    },
    secondary: {
      5: "#9c9c9c",
      2: "#dedede",
      6: "#f5f5f5",
      8: "#F19653",
      9: "#F07266",
      10: "#9FAE5D",
      3: "#FF0D87",
      7: "#B77CB8",
    },
  },
  fonts: `'Galano Grotosque', sans-serif`,
  components: { Checkbox: checkboxTheme },
});
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
