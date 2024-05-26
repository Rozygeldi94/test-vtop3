import { FC } from "react";
import { Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface ISignUpProps {
  isForBurgerMenu?: boolean;
}

export const SignUp: FC<ISignUpProps> = ({ isForBurgerMenu }) => {
  return (
    <Link
      as={RouterLink}
      to="#"
      padding="14px"
      bg="#478BF9"
      borderRadius="24px"
      transition="all 0.3s linear"
      _hover={{ bg: "#1e29ba", cursor: "pointer" }}
    >
      <Text
        textAlign={isForBurgerMenu ? "center" : "start"}
        textTransform="uppercase"
      >
        Sign up
      </Text>
    </Link>
  );
};
