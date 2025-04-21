import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { routeGenerator } from "../utils/routesGenerators";
import { adminPaths } from "./admin.routes";
import Login from "../pages/Login";


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
        element: <Login></Login>,   
    },
    {
        path: "/register",
        element: <App />,  
      
    },
    
    
])

export default router;  