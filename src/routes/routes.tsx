import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { routeGenerator } from "../utils/routesGenerators";
import { adminPaths } from "./admin.routes";
import Login from "../pages/Login";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,   /// outlet set 
    },
    {
        path: "/admin",
        element : (
            <ProtectedRoute >
                <App></App>
            </ProtectedRoute>
        ) , /// outlet set
        children: routeGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App />,   /// outlet set
        children: routeGenerator(facultyPaths)
    },
    {
        path: "/student",
        element: <App />,   /// outlet set
        children: routeGenerator(studentPaths)
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