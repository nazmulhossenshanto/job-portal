import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/Home/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/Home/JobApply/JobApply";

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
            path: 'jobs/:id',
            loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`),
            Component: JobDetails,
        },
        {
            path: 'singIn',
            Component: SignIn,
        },
        {
            path: 'jobApply/:id',
           element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },

    ]
  },
]);
export default router;