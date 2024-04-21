import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/index.jsx";

import Home from "./home/index.jsx";
import LoginPage from "./login/index.jsx";
import ProductPage from "./product/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout subHeader={true} showFooter={true}>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product/category/:categoryId",
    element: (
      <AppLayout>
        <ProductPage />
      </AppLayout>
    ),
  },
  {
    path: "/product/brand/:brandId",
    element: (
      <AppLayout>
        <ProductPage />
      </AppLayout>
    ),
  },
  {
    path: "/product",
    element: (
      <AppLayout>
        <ProductPage />
      </AppLayout>
    ),
  },
]);

export default router;
