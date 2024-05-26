import { FC } from "react";
import { Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface ISignInProps {
  isForBurgerMenu?: boolean;
}

export const SignIn: FC<ISignInProps> = ({ isForBurgerMenu }) => {
  return (
    <Link
      as={RouterLink}
      to="#"
      padding="14px"
      border="2px solid #9DADF2"
      borderRadius="24px"
      transition="all 0.3s linear"
      _hover={{ bg: "#1e29ba", borderColor: "#1e29ba", cursor: "pointer" }}
    >
      <Text
        textAlign={isForBurgerMenu ? "center" : "start"}
        textTransform="uppercase"
      >
        Log in
      </Text>
    </Link>
  );
};
