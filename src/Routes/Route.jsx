import {createBrowserRouter} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";

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

