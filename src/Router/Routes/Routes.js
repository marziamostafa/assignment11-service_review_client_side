import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllServices from "../../pages/AllServices/AllServices";
import Home from "../../pages/HomePage/Home/Home";
import Login from "../../pages/Login/Login";
import ServiceDetail from "../../pages/ServiceDetail/ServiceDetail";
import Blog from "../../pages/Shared/Blog/Blog";
import SignUp from "../../pages/SignUp/SignUp";
import MyReviews from '../../pages/MyReviews/MyReviews';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/allservices/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: async ({ params }) => {
                    console.log(params.id)
                    return fetch(`http://localhost:5000/allservices/${params.id}`)
                }
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>,
                // loader: async ({ params }) => {
                //     console.log(params.id)
                //     return fetch(`http://localhost:5000/reviews/${params.id}`)
                // }
            },
        ]
    }
])

export default router;