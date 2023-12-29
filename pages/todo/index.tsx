import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useId, useState } from "react";
import { Dialog } from "../../components";
import { ITodo } from "./interface";
import { TodoContainer } from "./style";

export default function Todo() {
    const id = useId()
    const [formData, setFormData] = useState<ITodo>({
        id,
        todo: "",
        isEdit: false,
    })
    
    const [todo, setTodo] = useState<ITodo[]>([]);
    /**
     * ! Create a new Todo
     * @params
     * @return void
     */
    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            id: Math.floor(Math.random() * 100000000000000),
            [e.target?.name]: e.target?.value, // thay đổi dòng input theo id
        })
        console.log(formData);

    };
    const onChangeModal = (e: ChangeEvent<HTMLInputElement>) => {
        inputValue(e.target?.value)
    };
    const createInput = () => {
        setFormData({
            id: "",
            todo: "",
            isEdit: false,
        }
        );
        setTodo([...todo, formData])
    };

    const [isOpen, openModal] = useState(false);

    const updateTodo = () => {
        openModal(true);
    };

    const [updateValue, inputValue] = useState<string>('');

    const [isUpdateModal, isComfirmModal] = useState(false);

    return (
        <TodoContainer>
            <h1>TodoList</h1>
            <div className="todo-list-container">
                <TextField
                    id="outlined-basic"
                    size="small"
                    label="Todo..."
                    variant="outlined"
                    name="todo"
                    value={formData.todo}
                    onChange={onChangeTodo}
                />
                <Button variant="outlined" onClick={createInput} >Create</Button>
            </div>
            <div className="group-checkbox">
                {todo.map((item, index) => (
                    <div className="group-content" key={index}>
                        <div className="content">
                            <span>{index + 1}. </span>
                            <span>{item.todo}</span>
                        </div>
                        <div className="group-btn">
                            <EditIcon className="warning" onClick={updateTodo} />
                            <DeleteIcon className="error" />
                            {/* <button>Comfirm</button> */}
                        </div>
                    </div>
                ))}
            </div>
            <Dialog
                open={isOpen}
                title="Update Todo"
                value={updateValue}
                onChangeDialog={onChangeModal}
                updateModal={isUpdateModal}
            >
            </Dialog>
        </TodoContainer>
    )
}
