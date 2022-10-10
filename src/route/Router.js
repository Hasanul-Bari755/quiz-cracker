import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../components/Errorpage";
import Home from "../components/Home";
import QuizDetails from "../components/QuizDetails";
import Root from "../components/Root";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                loader:async ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Home></Home>
            },
            {
                path: '/quiz/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element:<QuizDetails></QuizDetails>
            }
        ]
    }
])