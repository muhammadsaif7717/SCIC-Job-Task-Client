import {createBrowserRouter} from "react-router-dom";
import Root from "../Layouts/Root";
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
      ]
    },
  ]);

