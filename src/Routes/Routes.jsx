import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


export const router = createBrowserRouter([
    {
        path:"/",
        Component: MainLayouts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/login",
                Component: Login
            },
            {
                path:"/register",
                Component: Register
            }
        ]
    }
])