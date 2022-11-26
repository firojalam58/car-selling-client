import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import About from "../../About/About";
import AdminRoutes from "../../Dashboard/AdminRoutes/AdminRoutes";
import Dashboard from "../../Dashboard/Dashboard";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Product from "../../Product/Product";
import Products from "../../Product/Products/Products";
import Services from "../../Services/Services";
import Footer from "../../Shared/Footer/Footer";
import SignUp from "../../Signup/SignUp";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Product></Product>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
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
                path: '/categories/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },

            {
                path: '/footer',
                element: <Footer></Footer>
            },
        ],

    },
    // [
    //     {
    //         path: '/dashboard',
    //         element: <Dashboard></Dashboard>
    //     },
    //     {
    //         path: '/dashboard/users',
    //         element: <AdminRoutes></AdminRoutes>
    //     },
    // ]
])