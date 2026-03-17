import { createHashRouter } from "react-router-dom";

import Home from "../pages/Home";
import Order from "../pages/Order";
import AdminLogin from "../pages/AdminLogin";
import AdminOrders from "../pages/AdminOrders";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/order",
        element: <Order />,
    },
     {
        path: "/admin/login",
        element: <AdminLogin />,
    },
    {
        path: "/admin/orders",
        element: <AdminOrders />,
    }
]);

export default router; //Link to main.js