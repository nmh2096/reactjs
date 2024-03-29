import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";


export default function Dashboard() {
    // let a: number = 0;

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('useEffect run');

    }, []);
    useEffect(() => {
        console.log('useEffect run');

    }, [count2]);
    const countUp = () => {
        setCount(count + 1)

        // setCount(prev => prev + 1);
    }
    const countUp2 = () => {
        setCount2(count2 + 1)

        // setCount(prev => prev + 1);
    }

    const goTodo = () => {
        navigate("/todo/list")
    }    

    return (
        // <Navigate to={'/todo'} ></Navigate>
        <div>
            <p>{count}</p>
            <button onClick={countUp}>Up</button> <br />
            <p>{count2}</p>
            <button onClick={countUp2}>Up2</button>
            <button onClick={goTodo}>Todo</button>
            <button onClick={() => navigate("/auth/login")}>Login</button>
            <button onClick={() => navigate("/auth/register")}>Register</button>
            <button onClick={() => navigate("/post/list")}>Posts</button>
            <button onClick={() => navigate("/post/react-hook-form")}>React Hook Form</button>
        </div>
    )
}
