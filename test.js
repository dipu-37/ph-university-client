export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element:'CREATE DASHBOARD',
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element:'CREATE-ACADEMIC-SEMESTER',
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: 'ACADEMIC-SEMESTER',
      },
    ],
  },
];

export const adminRoutes = adminPaths.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
    return acc;
}, []);

console.log(adminRoutes)

//! Hard coded way

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