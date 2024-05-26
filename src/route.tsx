import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import Home from "./pages/Home";

export const ROOT = "/";

export const route = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    children: [{ path: ROOT, element: <Home /> }],
  },
]);
