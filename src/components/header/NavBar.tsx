import { FC } from "react";
import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const headerNavBarTitles = [
  { id: 1, title: "About us" },
  { id: 2, title: "Brands" },
  { id: 3, title: "Commissions" },
  { id: 4, title: "News" },
  { id: 5, title: "Contact us" },
  { id: 6, title: "Careers" },
];

const footerNavBarTitles = [
  { id: 1, title: "Terms & Conditions" },
  { id: 2, title: "Cookies" },
  { id: 3, title: "Contacts" },
  { id: 4, title: "Careers" },
  { id: 5, title: "Brand Guide" },
];

interface INavBarProps {
  isHeaderNavBar: boolean;
  isBurgerMenuNavBar?: boolean;
}

export const NavBar: FC<INavBarProps> = ({
  isHeaderNavBar,
  isBurgerMenuNavBar = false,
}) => {
  const navBarTitles = isHeaderNavBar ? headerNavBarTitles : footerNavBarTitles;
  return (
    <Flex
      flexDirection={
        isHeaderNavBar
          ? "row"
          : isBurgerMenuNavBar
          ? "column"
          : { base: "column", lg: "row" }
      }
      alignItems={
        isHeaderNavBar ? { base: "center" } : { base: "start", lg: "center" }
      }
      padding={isBurgerMenuNavBar ? "0" : "8px"}
      gap={
        isHeaderNavBar
          ? { base: "15px", lg: "20px", xl: "32px" }
          : isBurgerMenuNavBar
          ? "5px"
          : { base: "0", isLargerThan850: "10px", lg: "20px", xl: "32px" }
      }
    >
      {navBarTitles?.map((item) => (
        <Link
          as={RouterLink}
          to="#"
          key={item?.id}
          width={isBurgerMenuNavBar ? "100%" : "initial"}
          padding={isBurgerMenuNavBar ? "13px 20px" : "0"}
          transition="all 0.5s"
          _hover={
            isBurgerMenuNavBar
              ? {
                  color: "MainBlue",
                  bg: "DeepBlue",
                }
              : {
                  color: "MainBlue",
                  textDecoration: "underline",
                }
          }
          border={isBurgerMenuNavBar ? "2px solid #478BF9" : "bone"}
          borderRadius={isBurgerMenuNavBar ? "50px" : "0"}
          fontSize={isBurgerMenuNavBar ? "1.13rem" : "initial"}
        >
          {item?.title}
        </Link>
      ))}
    </Flex>
  );
};
