import { Container, Flex, Image, Link, Text } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
const blogs = [
  {
    id: 1,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    created_time: "10.02.2023",
    to: "https://roha-ecommerce.netlify.app/",
  },
  {
    id: 2,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    created_time: "10.02.2023",
    to: "",
  },
  {
    id: 3,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    created_time: "10.02.2023",
    to: "",
  },
  {
    id: 4,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    created_time: "10.02.2023",
    to: "",
  },
  {
    id: 5,
    title: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    created_time: "10.02.2023",
    to: "",
  },
  {
    id: 6,
    title:
      "Payment methods: QNB Finans Bank, Neteller, webmoney, Bank transfer",
    created_time: "22.05.2024",
    to: "",
  },
  {
    id: 7,
    title: "Payment methods: AK Bank, Neteller, webmoney, Bank transfer",
    created_time: "22.05.2024",
    to: "",
  },
];

export default function Home() {
  return (
    <Container
      maxWidth="1670px"
      width="100%"
      padding={{ base: "0 10px", isLargerThan440: "0 15px" }}
      margin={{ base: "30px 0", lg: "0 auto" }}
    >
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent={{ base: "center", lg: "space-between" }}
        gap={{ base: "80px", lg: "60px" }}
      >
        <Flex
          flexDirection="column"
          alignItems={{ base: "center", lg: "start" }}
          gap="48px"
          width={{ base: "initial", md: "500px", lg: "669px" }}
          mt={{ base: "70px", xl: "0" }}
        >
          <Flex flexDirection="column" gap="24px">
            <Text
              as="h1"
              fontSize={{
                base: "2.88rem",
                isLargerThan600: "3.5rem",
                md: "5rem",
                lg: "6rem",
              }}
              fontWeight="500"
              textAlign={{ base: "center", lg: "start" }}
              textTransform="uppercase"
              lineHeight={{ base: "110%", md: "96%" }}
            >
              HOUSE OF{" "}
              <Text color="MainBlue" textTransform="uppercase">
                GAMBLING
              </Text>
            </Text>
            <Text
              fontSize={{
                base: "1.25rem",
                md: "2rem",
              }}
              textAlign={{ base: "center", lg: "start" }}
              color="TranspWhite"
            >
              Raise your ROI with direct advertiser
            </Text>
          </Flex>
          <Link
            as={RouterLink}
            to="#"
            display="flex"
            alignItems="center"
            justifyContent="center"
            maxWidth={{ base: "100%", md: "max-content" }}
            width="100%"
            minWidth="200px"
            minHeight={{ base: "53px", md: "72px" }}
            padding={{ base: "15px 20px", md: "20px 72px" }}
            bg="MainBlue"
            borderRadius="50px"
            transition="all 0.3s linear"
            _hover={{ bg: "#1e29ba", cursor: "pointer" }}
          >
            <Text
              as="span"
              textTransform="uppercase"
              fontSize={{ base: "1.12rem", md: "1.5rem" }}
              fontWeight="600"
              textAlign="center"
              lineHeight="32%"
              letterSpacing="1.4px"
            >
              Become a Partner
            </Text>
          </Link>
        </Flex>

        <Flex
          display={{ base: "flex", md: "none", xl: "flex" }}
          className="bg-banner"
          flexDirection={{ base: "row-reverse", xl: "row" }}
          gap="16px"
          position="absolute"
          left={{ base: "-60px", md: "50%", xl: "55%" }}
          top={{
            base: "490px",
            isLargerThan500: "350px",
            isLargerThan600: "335px",
            xl: "420px",
          }}
          overflow="hidden"
          opacity="0.6"
        >
          <Image
            width={{
              base: "50px",
              isLargerThan500: "60px",
              isLargerThan600: "70px",
              isLargerThan700: "80px",
              xl: "100%",
            }}
            maxHeight={{ base: "100vw", md: "initial" }}
            src="bg_banner/Line_Vertical_1.svg"
            opacity="85%"
          />
          <Image
            width={{
              base: "50px",
              isLargerThan500: "60px",
              isLargerThan600: "70px",
              isLargerThan700: "80px",
              xl: "100%",
            }}
            maxHeight={{ base: "100vw", md: "initial" }}
            src="bg_banner/Line_Vertical_2.svg"
          />
          <Image
            width={{
              base: "50px",
              isLargerThan500: "60px",
              isLargerThan600: "70px",
              isLargerThan700: "80px",
              xl: "100%",
            }}
            maxHeight={{ base: "100vw", md: "initial" }}
            src="bg_banner/Line_Vertical_3.svg"
          />
        </Flex>

        <Flex
          flexDirection="column"
          gap={{ base: "18px", md: "24px" }}
          alignItems="center"
          mt={{ base: "230px", md: "0" }}
          mb={{ base: "119px", md: "227px" }}
        >
          <Text fontSize="2.5rem" fontWeight="600" textTransform="uppercase">
            Blog
          </Text>
          <Flex
            className="main-blog"
            maxWidth="531px"
            minWidth="300px"
            maxHeight={{ base: "421px", isLargerThan600: "595px" }}
            padding={{
              base: "10px 5px 0 10px",
              isLargerThan600: "20px 10px 0 20px",
            }}
            bg="rgba(255, 255, 255, 0.12)"
            border={{ base: "2px solid #478BF9", md: "3px solid #478BF9" }}
            borderRadius={{ base: "55px", isLargerThan600: "100px" }}
            overflow="hidden"
          >
            <Flex
              className="main-blog"
              paddingRight="5px"
              flexDirection="column"
              gap={{ base: "10px", isLargerThan600: "16px" }}
              overflowY="scroll"
              scrollBehavior="smooth"
            >
              {blogs?.map((item) => (
                <Link
                  as={RouterLink}
                  to={item?.to}
                  key={item?.id}
                  margin="0 5px 0 0"
                  padding={{
                    base: "15px 35px",
                    isLargerThan600: "16px 40px",
                    xl: "16px 64px",
                  }}
                  bg="#1E1231"
                  borderRadius={{ base: "36px", isLargerThan600: "100px" }}
                  transition="0.4s linear"
                  _hover={{ bg: "MainBlue" }}
                >
                  <Text
                    fontSize={{
                      base: "1rem",
                      isLargerThan600: "1.2rem",
                      md: "1.3rem",
                      lg: "1.4rem",
                      isLargerThan1050: "1.5rem",
                    }}
                    lineHeight={{ base: "20px", isLargerThan600: "29px" }}
                  >
                    {item?.title}
                  </Text>
                  <Text fontSize="0.87rem" color="TranspWhite">
                    {item?.created_time}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
