
import AdminDashboard from "../pages/admin/AdminDashboard";



// type TRoute = {
//     path : string,
//     element: ReactNode;
// }

// type TSidebarItem = {
//     key : string,
//     label : ReactNode,
//     children?: TSidebarItem[],
// }



export const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <AdminDashboard />,
    },
    {
      name: 'Academic Management',
      children: [
        {
          name: 'Create A. Semester',
          path: 'create-academic-semester',
          element: <AdminDashboard />,
        },
      ]
       
    },
  ];

  
// export const adminSidebarItems = adminPaths.reduce(
//   (acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,
//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );



// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);


/// hard code ---------------->

// adminSidebarItems = [
//   {
//     key: 'Dashboard',
//     label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
//   },
//   {
//     key: 'Academic Management',
//     label: 'Academic Management',
//     children: [
//       {
//         key: 'Create A. Semester',
//         label: <NavLink to="/admin/create-academic-semester">Create A. Semester</NavLink>
//       }
//     ]
//   }
// ]


// export const adminPaths = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];
