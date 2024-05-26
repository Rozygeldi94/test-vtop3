import { Box, Container, Flex } from "@chakra-ui/react";
import { NavBar } from "../header/NavBar";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      margin="0 auto"
      padding={{
        base: "20px",
        isLargerThan850: "40px 15px 24px 15px",
        xl: "40px 140px 24px 140px",
      }}
      bg="inherit"
      border={{ base: "2px solid #478BF9", md: "4px solid #478BF9" }}
      borderWidth={{ base: "2px 2px 0 2px", md: "4px 4px 0 4px" }}
      borderTopLeftRadius="82px"
      borderTopRightRadius="82px"
      zIndex="999"
    >
      <Container maxWidth="1670px" width="100%" padding="0">
        <Flex
          flexDirection={{ base: "column", isLargerThan850: "row" }}
          alignItems={{ base: "start", isLargerThan850: "center" }}
          justifyContent={{ base: "start", isLargerThan850: "space-between" }}
        >
          <NavBar isHeaderNavBar={false} />
          <SocialMedia />
        </Flex>
      </Container>
    </Box>
  );
};
