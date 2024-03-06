import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../LayOut/MainlayOut";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import ErrorPage from "../Error/ErrorPage";
import DocDetails from "../Home/Doctor/DocDetails";
import PrivateProvider from "./PrivateProvider";
import Contact from "../Contact/Contact";
import Appointment from "../Appointment/Appointment";
import ServiceProducts from "../Appointment/ServiceProducts";

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
      },{
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/appointment',
        element:<Appointment></Appointment>
      },
      {
        path:'/services/:name',
        element:<ServiceProducts></ServiceProducts>,
        loader:({params})=>fetch(`http://localhost:5000/srProducts/${params.name}`)
      }
    ],
  },
]);

export default Routes;
