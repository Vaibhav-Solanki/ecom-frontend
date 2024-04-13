import { createBrowserRouter } from "react-router-dom";

import AppLayout from '../components/layout.jsx'

import Home from "./home/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout> <Home/></AppLayout>
    },
    {
        path: "/lay",
        element: <AppLayout/>,
    },
]);

export default router
