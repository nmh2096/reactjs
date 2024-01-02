import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useId, useState } from "react";
import { Dialog, DeleteDialog } from "../../components";
import { ITodo } from "./interface";
import { TodoContainer, TextFieldStyle } from "./style";


export default function Todo() {
    const id = useId()

    const [formData, setFormData] = useState<ITodo>({
        id,
        todo: "",
        isEdit: false,
    })

    const [todo, setTodo] = useState<ITodo[]>([
        {
            id: 1,
            todo: "Wash dish",
            isEdit: false,
        },
        {
            id: 2,
            todo: "Study",
            isEdit: false,
        }
    ]);
    /**
     * ! Create a new Todo
     * @params
     * @return void
     */
    const onChangeTodo = (e: ChangeEvent<HTMLInputElement>, isUpdate: boolean = false) => {
        if (isUpdate) {
            setFormData({
                ...formData,
                [e.target?.name]: e.target?.value, // thay đổi dòng input theo id
            })
        } else {
            setFormData({
                ...formData,
                id: Math.floor(Math.random() * 100000000000000),
                [e.target?.name]: e.target?.value, // thay đổi dòng input theo id
            })
        }
        console.log(formData);
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

    /**
     * ! Handle Dialog
     */

    const [isOpen, setIsOpen] = useState(false);

    const [titleModal, setTitleModal] = useState('UpdateModal')

    /** Update a todo
     * @param
     * @return void
     */


    const closeUpdateDialog = () => {
        setFormData({
            id,
            todo: "",
            isEdit: false,
        })
        setIsOpen(false)
    }

    const openDialog = (id: string | number) => {
        const updatedItem = todo.find((item) => {
            return item.id === id;
        });
        if (updatedItem) {
            setFormData(updatedItem);
        }
        console.log(updatedItem);

        setIsOpen(true);
        setTitleModal('UpdateModal');
    };

    const closeDialog = (id: string | number) => {
        setIsOpen(true);
        setTitleModal('DeleteModal');
    };

    const updateDialog = () => {
        const updateData = todo.map(item => {
            if (item.id === formData.id) {
                return {
                    ...formData,
                    todo: formData.todo,
                }
            } else {
                return item
            }
        })
        setTodo(updateData)
        console.log(updateData);
        closeUpdateDialog()
    }

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
                            <EditIcon className="warning" onClick={() => openDialog(item.id)} />
                            <DeleteIcon className="error" onClick={() => closeDialog(item.id)} />
                            {/* <button>Comfirm</button> */}
                        </div>
                    </div>
                ))}
            </div>
            <Dialog
                open={isOpen}
                title={titleModal}
                submitBtn="Update"
                onCancel={closeUpdateDialog}
                onSubmit={updateDialog}
            >
                <TextFieldStyle
                    size='small'
                    value={formData.todo}
                    name='todo'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeTodo(e, true)}
                ></TextFieldStyle>
            </Dialog>
            <DeleteDialog open={true}>

            </DeleteDialog>
        </TodoContainer>
    )
}
