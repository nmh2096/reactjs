import styled from 'styled-components';
import { TextField } from '@mui/material';

export const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .todo-list-container{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        width: 500px;
        align-self: center;
    }
    .group-content{
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 500px;
        .index{
            display: flex;
        }
        .group-btn{
            display: flex;
            gap: 10px;
            .warning {
                color: orange;
                cursor: pointer;
            }
            .error{
                color: red;
                cursor: pointer;
            }
        }
    }
`;
export const TextFieldStyle = styled(TextField)`
    width: 100%;
`;