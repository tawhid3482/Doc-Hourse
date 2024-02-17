import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../LayOut/MainlayOut";
import Home from "../Home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Routes;
