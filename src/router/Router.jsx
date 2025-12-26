import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";

 const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: 'register',
            Component: Register,
        },
        {
            path: 'singIn',
            Component: SignIn,
        },

    ]
  },
]);
export default router;