import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout.jsx";

import Home from "./home/index.jsx";
import LoginPage from "./login/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
