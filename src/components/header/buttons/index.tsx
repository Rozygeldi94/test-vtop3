import { FC, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { SignInBtnArrowPic } from "../SignInBtnArrowPic";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { ChangeLang } from "./ChangeLang";
import { BurgerMenu } from "./BurgerMenu";

interface IButtonsProps {
  isLargerThan768: boolean;
}

export const Buttons: FC<IButtonsProps> = ({ isLargerThan768 }) => {
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);
  return isLargerThan960 ? (
    <Flex alignItems="center" gap="14px">
      <ChangeLang />
      <SignIn />
      <SignUp />
    </Flex>
  ) : (
    <Flex alignItems="center" gap="5px">
      <ChangeLang />
      {isLargerThan768 ? (
        <Menu>
          <MenuButton
            as={Button}
            aria-label="Options"
            variant="outline"
            paddingInlineEnd="0"
            rightIcon={<SignInBtnArrowPic />}
            border="none"
            _hover={{ bg: "NavyBlue" }}
            _active={{ bg: "NavyBlue" }}
            _focus={{ bg: "NavyBlue" }}
          >
            <Image
              maxW="40px"
              minWidth="35px"
              src="sign_in_logo.png"
              alt="sign in logo"
            />
          </MenuButton>
          <MenuList
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg="MenuBgColor"
          >
            <MenuItem width="initial" bg="inherit">
              <SignIn />
            </MenuItem>
            <MenuItem width="initial" bg="inherit">
              <SignUp />
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <>
          <Box padding="4px" width="30px" _hover={{ cursor: "pointer" }}>
            <Image
              margin="0 auto"
              src={isOpen ? "close_menu.svg" : "burger_menu.svg"}
              alt="burger menu logo"
              onClick={isOpen ? onClose : onOpen}
            />
          </Box>
          <BurgerMenu isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </Flex>
  );
};
