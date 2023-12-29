import Dashboard from "../pages/dashboard"
import Login from "../pages/login"
import Todo from "../pages/todo";

const routes = [
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/auth",
        element: <Login />
    },
    {
        path: "/todo",
        element: <Todo />
    }
];
export default routes;