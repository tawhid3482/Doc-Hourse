import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../LayOut/MainlayOut";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../Error/ErrorPage";
import DocDetails from "../Home/Doctor/DocDetails";
import PrivateProvider from "./PrivateProvider";
import Contact from "../Contact/Contact";
import ServiceProducts from "../Appointment/ServiceProducts";
import Dashboard from "../Dashboard/Dashboard";
import AdminHome from "../Dashboard/Admin/AdminHome";
import AddService from "../Dashboard/AddService/AddService";
import ManageService from "../Dashboard/AddService/ManageService";
import AllUser from "../Dashboard/AllUsers/AllUser";
import AddDoc from "../Dashboard/AddDoc/AddDoc";
import ManageDoc from "../Dashboard/AddDoc/ManageDoc";
import AddSerProduct from "../Dashboard/AddSerPro/AddSerProduct";
import ManagePro from "../Dashboard/AddSerPro/ManagePro";
import UserHome from "../Dashboard/Users/UserHome";
import MyReviews from "../Dashboard/Users/MyReviews";
import MyHistory from "../Dashboard/Users/MyHistory";
import AdminRoutes from "./AdminRoutes";
import Appointment from "../Appointment/Appointment";
import YourAppointment from "../Dashboard/Users/YourAppointment";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/docDetails/:id",
        element: (
          <PrivateProvider>
            <DocDetails></DocDetails>
          </PrivateProvider>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/services/:name",
        element: (
          <PrivateProvider>
            <ServiceProducts></ServiceProducts>
          </PrivateProvider>
        ),
        loader: ({ params }) =>
          fetch(`https://doc-house-server-two.vercel.app/srProducts/${params.name}`),
      },
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'adminHome',
        element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path:'addService',
        element:<AdminRoutes><AddService></AddService></AdminRoutes>
      },
      {
        path:'manageService',
        element:<AdminRoutes><ManageService></ManageService></AdminRoutes>
      },
      {
        path:'allUsers',
        element:<AdminRoutes><AllUser></AllUser></AdminRoutes>
      },
      {
        path:'addDoc',
        element:<AdminRoutes><AddDoc></AddDoc></AdminRoutes>
      },
      {
        path:'manageDoc',
        element:<AdminRoutes><ManageDoc></ManageDoc></AdminRoutes>
      },
      {
        path:'AddServicePro',
        element:<AdminRoutes><AddSerProduct></AddSerProduct></AdminRoutes>      },
      {
        path:'manageServicePro',
        element:<AdminRoutes><ManagePro></ManagePro></AdminRoutes>
      },
      // user
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'myAppointments',
        element:<YourAppointment></YourAppointment>
      },
      {
        path:'myReviews',
        element:<MyReviews></MyReviews>
      },
      {
        path:'myHistory',
        element:<MyHistory></MyHistory>
      },
    ]
  },
]);

export default Routes;
