import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../pages/signUp/signUp";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
    },
    {
      path:'/signup',
      element:<SignUp/>
    }
  ]);
  export default router