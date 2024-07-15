import {createBrowserRouter} from "react-router-dom";
import Home from "../Layouts/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);

