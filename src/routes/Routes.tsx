import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "../features/home/Home";
function Routes() {
  const routes = createHashRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}
export default Routes;
