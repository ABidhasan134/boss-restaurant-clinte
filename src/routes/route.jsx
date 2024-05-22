import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../layout/main";
import Home from "../pages/Home/home";
import Manu from "../pages/menu page/manu";
import Order from "../pages/order/order";

const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/menu",
          element: <Manu></Manu>
        },
        {
          path: '/order/:category',
          element:<Order></Order>
        }
      ]
    }
  ]);
  export default routers;