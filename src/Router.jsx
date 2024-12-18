import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayOut from "./LayOut/MainLayOut";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import JobDetails from "./Pages/JobDetails";
import PrivateRoute from "./Context/PrivateRoute";
import JobApply from "./Pages/JobApply";
const router = createBrowserRouter([
    {

        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement:<h4>Route not found</h4>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/jobs/:id',
                element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path:'/jobApply/:id',
                element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
        ]
    },
]);
export default router