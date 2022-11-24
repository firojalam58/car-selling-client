import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import About from "../../About/About";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Product from "../../Product/Product";
import Products from "../../Product/Products/Products";
import Reviews from "../../Reviews/Reviews";
import Services from "../../Services/Services";
import Footer from "../../Shared/Footer/Footer";

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
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/login',
                element: <Login></Login>
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
        ]
    }
])