import AuthLayout from "@/layout/AuthLayout";
import BaseLayout from "@/layout/BaseLayout";
import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Dashboard from "@/pages/dashboard";
import DetailTodo from "@/pages/detailTodo";
import Posts from "@/pages/posts";
import ReactHookForm from "@/pages/reactHookForm";
import Todo from "@/pages/todo";
import ProtectedRouter from "./ProtectionRouter";
import Forgot from "@/pages/auth/forgot";

const routes = [
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'forgot',
                element: <Forgot />
            },
        ]
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: 'todo',
                element: <BaseLayout />,
                children: [
                    {
                        path: 'list',
                        element: <Todo />
                    },
                    {
                        path: ":id",
                        element: <ProtectedRouter component={DetailTodo} />
                    },
                ]
            },
            {
                path: 'post',
                element: <BaseLayout />,
                children: [
                    {
                        path: 'list',
                        element: <Posts />
                    },
                    {
                        path: ':id',
                        element: <DetailTodo />
                    },
                    {
                        path: 'react-hook-form',
                        element: <ReactHookForm />
                    },
                ]
            },

        ]
    }
];
export default routes;