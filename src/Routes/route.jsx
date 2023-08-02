import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../pages/signUp/signUp";
import Login from "../pages/Login/Login";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]);
  export default router