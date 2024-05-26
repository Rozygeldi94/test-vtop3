import { useState } from "react";
import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export const ChangeLang = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  const handleChangeLang = (lang: string) => {
    return () => {
      setSelectedLang(lang);
    };
  };
  return (
    <Menu>
      <MenuButton
        as={Flex}
        aria-label="Options"
        paddingInlineEnd="0"
        _hover={{ bg: "NavyBlue", cursor: "pointer" }}
      >
        <Flex
          gap="8px"
          padding={{ base: "8px", md: "14px" }}
          border="2px solid #9DADF2"
          borderRadius="24px"
          _hover={{ cursor: "pointer" }}
        >
          <Image
            src="Union.svg"
            alt="change language logo"
            width={{ base: "18.75px" }}
          />
          <Text
            display={{ base: "none", md: "block" }}
            textTransform="uppercase"
          >
            {selectedLang}
          </Text>
        </Flex>
      </MenuButton>
      <MenuList bg="MenuBgColor">
        <MenuItem
          bg="inherit"
          transition="0.4s linear"
          _hover={{ bg: "MainBlue" }}
        >
          <Text
            width="100%"
            textTransform="uppercase"
            onClick={handleChangeLang("en")}
          >
            en
          </Text>
        </MenuItem>
        <MenuItem
          bg="inherit"
          transition="0.4s linear"
          _hover={{ bg: "MainBlue" }}
        >
          <Text
            width="100%"
            textTransform="uppercase"
            onClick={handleChangeLang("ru")}
          >
            ru
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
