import { FC, useEffect, useState } from "react";
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
} from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

interface IBurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: FC<IBurgerMenuProps> = ({ isOpen, onClose }) => {
  const [headerHeight, setHeaderHeight] = useState("");

  useEffect(() => {
    const tempHeaderHeight = document.querySelector("#header");
    if (tempHeaderHeight) {
      setHeaderHeight(tempHeaderHeight.clientHeight + "px");
    }
  }, [isOpen]);

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerContent>
        <DrawerBody
          display="flex"
          flexDirection={{ base: "column", isLargerThan500: "row" }}
          gap="30px"
          width="100%"
          height="100vh"
          mt="30px"
          padding="0 15px"
          position="absolute"
          top={isOpen ? headerHeight : "-120vh"}
          left="0"
          zIndex="999"
          transition="all 0.2s ease"
          bg="NavyBlue"
        >
          <NavBar isHeaderNavBar={false} isBurgerMenuNavBar={true} />
          <Divider
            display={{ base: "none", isLargerThan500: "block" }}
            orientation="vertical"
          />
          <Flex
            flexDirection="column"
            gap="5px"
            maxWidth={{ base: "initial", isLargerThan500: "200px" }}
            width={{ base: "100%", isLargerThan600: "85%" }}
            margin={{ base: "initial", isLargerThan600: "0 auto" }}
            bg="50px"
          >
            <SignIn isForBurgerMenu={true} />
            <SignUp isForBurgerMenu={true} />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
