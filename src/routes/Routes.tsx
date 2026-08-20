import { createHashRouter, RouterProvider } from "react-router-dom";
import { StudentsRecordProvider } from "../storage/StudentsRecordStorage";
import Home from "../features/home/Home";
function Routes() {
  const routes = createHashRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: (
            <StudentsRecordProvider>
              <Home />
            </StudentsRecordProvider>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}
export default Routes;
