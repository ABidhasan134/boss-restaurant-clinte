import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../layout/main";
import Home from "../pages/Home/home";
import Manu from "../pages/menu page/manu";
import Order from "../pages/order/order";
import LogIn from "../pages/log/logIn";
import Register from "../register/register";
import Sceret from "../pages/sceret";
import PrivetRoutes from "./privet";

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
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/singIn",
          element: <Register></Register>
        },
        {
          path: "/sequer",
          element: <PrivetRoutes><Sceret></Sceret></PrivetRoutes> 
        }
      ]
    }
  ]);
  export default routers;