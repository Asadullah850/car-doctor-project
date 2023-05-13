import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "./Login";
import Registration from "./Registration";
import CheckOut from "../Pages/BookingRow";
import OrderFrom from "../Pages/OrderFrom";
import OrderList from "../Pages/BookingRow";
import Bookings from "../Pages/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'bookings/:id',
            element:<PrivateRoute><OrderFrom></OrderFrom></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'orderlist',
            element:<OrderList></OrderList>,
            loader: () => fetch(`http://localhost:5000/bookings`)
        },
        {
            path:'bookings',
            element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
        },
        {
            path:'login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Registration></Registration>,
        },
      ]
    },
  ]);
export default router

