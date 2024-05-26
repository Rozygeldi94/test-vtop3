import { Box, Flex, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Layout = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh" bg="NavyBlue">
      <Header />
      <Flex as="main" alignItems="center" flexGrow="1" position="relative">
        <Outlet />
        <Box position="absolute" left="0" top="0" zIndex="-1">
          <Image src="bg_mask/Dot_Light.svg" />
        </Box>
        <Box position="absolute" right="0" bottom="0" zIndex="-1">
          <Image src="bg_mask/Dot_Light2.svg" />
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};
