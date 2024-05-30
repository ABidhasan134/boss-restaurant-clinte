import { createBrowserRouter } from "react-router-dom";

import Dashbord from "../layout/dashbord";
import Main from "../layout/main";
import AddItems from "../pages/Dashbord/addUsers/addItmes";
import AllUser from "../pages/Dashbord/alluser/AllUser";
import MyCart from "../pages/Dashbord/myCart/myCart";
import Home from "../pages/Home/home";
import LogIn from "../pages/log/logIn";
import Manu from "../pages/menu page/manu";
import Order from "../pages/order/order";
import Sceret from "../pages/sceret";
import Register from "../register/register";
import AdminRoute from "./adminRoute";
import PrivetRoutes from "./privet";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Manu></Manu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/singIn",
        element: <Register></Register>,
      },
      {
        path: "/sequer",
        element: (
          <PrivetRoutes>
            <Sceret></Sceret>
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoutes>
        <Dashbord></Dashbord>
      </PrivetRoutes>
    ),
    children: [
      // normal user
      {
        path: "myCart", //this is relative path when we use /cart it becomes absolute path
        element: <MyCart></MyCart>,
      },
      // admin related route
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "adduser",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default routers;
