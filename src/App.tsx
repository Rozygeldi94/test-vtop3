import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { route } from "./route";
import theme from "./Chakra-ui/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={route} />;
    </ChakraProvider>
  );
}

export default App;
