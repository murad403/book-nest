import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from '../components/Login';
import Register from "../components/Register";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Book from "../components/Book";
import PrivateRoute from "./PrivateRoute";
import Orders from "../pages/Dashboard/Orders";
import DashBoard from "../pages/Dashboard/Dashboard/DashBoard";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/book/:id',
                element: <Book></Book>
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: "",
                element: <div>home</div>
            },
            {
                path: "add-book",
                element: <div>add book</div>
            },
            {
                path: "edit-book/:id",
                element: <div>edit book</div>
            },
            {
                path: "manage-book",
                element: <div>manage book</div>
            }
        ]
    }
])
export default Router;