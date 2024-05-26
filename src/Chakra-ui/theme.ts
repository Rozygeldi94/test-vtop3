import { extendTheme } from "@chakra-ui/react";

const themes = {
  initialColorMode: "light",
  useSystemColorMode: true,
  colors: {
    MainBlue: "#478BF9",
    CleanWhite: "#FFF",
    NavyBlue: "#110A1D",
    TranspWhite: "rgb(225,255,255,60%)",
    DeepBlue: "#1E1231",
    Purple: "#9DADF2",
    FreshMint: "#7DDACF",
    MenuBgColor: "rgb(53, 52, 63)",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Lexend, sans-serif",
        color: "#fff",
      },
      ".main-blog": {
        base: {
          "&::-webkit-scrollbar": {
            width: "4px",
          },
        },
        md: {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
        },
      },
      ".bg-banner": {
        base: {
          transform: "rotate(90deg) translate(-70%, -40%)",
        },
        xl: {
          transform: "rotate(0) translate(-70%, -40%)",
        },
      },
    }),
  },
};

const breakpoints = {
  base: "0px",
  sm: "320px",
  isLargerThan360: "360px",
  isLargerThan440: "439px",
  isLargerThan450: "450px",
  isLargerThan500: "500px",
  isLargerThan550: "550px",
  isLargerThan600: "600px",
  isLargerThan650: "650px",
  isLargerThan700: "701px",
  md: "768px",
  isLargerThan850: "850px",
  lg: "960px",
  isLargerThan1050: "1050px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme(themes, { breakpoints });
export default theme;
