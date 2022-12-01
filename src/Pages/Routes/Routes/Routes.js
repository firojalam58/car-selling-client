import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import About from "../../About/About";
import AddProducts from "../../AddProducts/AddProducts";
import MyProduct from "../../AddProducts/MyProduct";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Dashboard/Dashboard";
import DashboardLayout from "../../Dashboard/DashboardLayout";
import MyOrder from "../../Dashboard/MyOrder/MyOrder";
import ReportedItems from "../../Dashboard/ReportedItems/ReportedItems";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Product from "../../Product/Product";
import Products from "../../Product/Products/Products";
import Footer from "../../Shared/Footer/Footer";
import SignUp from "../../Signup/SignUp";
import PrivateRoute from "../Private/PrivateRoute";

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
                path: '/about',
                element: <About></About>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/order',
                element: <MyOrder></MyOrder>
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
        ]

    },
    
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>
    
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrder></MyOrder>
    
            },
            {
                path: '/dashboard/usersSellers',
                element:<AllSellers></AllSellers>
    
            },
            {
                path: '/dashboard/usersBuyers',
                element: <AllBuyers></AllBuyers>
    
            },
            {
                path: '/dashboard/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>
    
            },
        ]
    }
])

