import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Components/Root/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        errorElement: <Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/signin',
                element: <Login/>
            },
            {
                path:'/signup',
                element:<Register/>
            }
        ]
    }
])

export default Routes