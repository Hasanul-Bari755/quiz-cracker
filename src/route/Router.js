import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../components/Errorpage";
import Home from "../components/Home";
import Root from "../components/Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    }
])