import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Components/Root/Root";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        errorElement: <Error/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: ()=>fetch('/events.json')
            },
            {
                path:'/contact',
                element: <PrivateRoute><Contact/></PrivateRoute>
            },
            {
                path:'/signin',
                element: <Login/>
            },
            {
                path:'/signup',
                element:<Register/>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails/></PrivateRoute>,
                loader: ()=>fetch('/events.json')
            },
            {
                path: '/blogs/',
                element: <PrivateRoute><Blogs/></PrivateRoute>,
                loader: ()=>fetch('/blogs.json')
            }
        ]
    }
])

export default Routes