import { createHashRouter, RouterProvider } from "react-router-dom";
import StudentsRecord from "../features/studentsRecord/StudentsRecord";
function Routes() {
  const routes = createHashRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <StudentsRecord />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}
export default Routes;
