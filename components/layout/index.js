import { Box } from "@chakra-ui/react";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box as="main" minH="100vh">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
