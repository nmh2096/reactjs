import styled from "styled-components";
import { Dialog } from "@mui/material";

export const DialogDeleteContainer = styled(Dialog)`
    .dialog-Container{
        width: 400px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h3{
            margin-bottom: 10px;
        }
        .text-field{
            width: 300px;
        }
        .group-btn{
            margin: 20px;
            display: flex;
            margin-left: auto;
            gap: 5px;
        }
    }
`;