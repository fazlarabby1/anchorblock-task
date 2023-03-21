import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import UsersList from "../pages/Dashboard/UsersList/UsersList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/users-list',
                element: <PrivateRoute><UsersList /></PrivateRoute>
            },
        ]
    }
])