import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import About from "../../About/About";
import AddProducts from "../../AddProducts/AddProducts";
import MyProduct from "../../AddProducts/MyProduct";
import Blog from "../../Blog/Blog";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Dashboard/Dashboard";
import DashboardLayout from "../../Dashboard/DashboardLayout";
import MyOrder from "../../Dashboard/MyOrder/MyOrder";
import Payment from "../../Dashboard/Payment/Payment";
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
                element: <PrivateRoute><Product></Product></PrivateRoute>
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
                path: '/blog',
                element: <Blog></Blog>
            },
           
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-selling-server-rho.vercel.app/categories/${params.id}`)
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
                element:<PrivateRoute> <AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=> fetch(`https://car-selling-server-rho.vercel.app/bookings/${params.id}`)
            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>
    
            },
        ]
    }
])

