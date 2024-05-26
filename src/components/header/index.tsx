import { Box, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { Buttons } from "./buttons";

export const Header = () => {
  const [isLargerThan1350] = useMediaQuery("(min-width: 1350px)");
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      as="header"
      id="header"
      width="100%"
      margin={{ base: "10px auto 0 auto", md: "16px auto 0 auto" }}
      bg="inherit"
      position="relative"
      zIndex="999"
    >
      <Container
        maxWidth="1670px"
        width="100%"
        padding={{ base: "0 10px", isLargerThan440: "0 15px" }}
      >
        <Flex
          alignItems="center"
          justifyContent={{ base: "end", md: "space-between" }}
          padding={{
            base: "10px 14px",
            md: "20px 15px",
            isLargerThan1050: "24px 48px",
          }}
          border={{ base: "2px solid #478BF9", md: "4px solid #478BF9" }}
          borderRadius="50px"
        >
          {isLargerThan1350 && <Box visibility="hidden" width="287px"></Box>}
          {isLargerThan768 && <NavBar isHeaderNavBar={true} />}
          <Buttons isLargerThan768={isLargerThan768} />
        </Flex>
      </Container>
    </Box>
  );
};
