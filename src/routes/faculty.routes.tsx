
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import MyCourse from "../pages/faculty/MyCourse";


export const facultyPaths = [
    {
        name : 'Dashboard',
        path : 'dashboard',
        element : <FacultyDashboard></FacultyDashboard>
    },
    {
        name : 'My Courses',
        path : 'courses',
        element : <MyCourse></MyCourse>
    },
   
]