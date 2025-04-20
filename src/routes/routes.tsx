import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { routeGenerator } from "../utils/routesGenerators";
import { adminPaths } from "./admin.routes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,   /// outlet set 
    },
    {
        path: "/admin",
        element: <App />,   /// outlet set
        children: routeGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App />,   /// outlet set
        children: routeGenerator(adminPaths)
    },
    {
        path: "/student",
        element: <App />,   /// outlet set
        children: routeGenerator(adminPaths)
    },
    {
        path: "/login",
        element: <App />,   /// outlet set
        children: routeGenerator(adminPaths)
    },
    {
        path: "/register",
        element: <App />,   /// outlet set
        children: routeGenerator(adminPaths)
    },
    
    
])

export default router;  