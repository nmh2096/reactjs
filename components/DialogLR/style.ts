import { Dialog } from "@mui/material";
import styled from "styled-components";

export const DialogContainer = styled(Dialog)`
.dialog-container {
    padding: 20px;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    .modal-body {
      padding: 20px 0;
      width: 100%;
    }
    .group-btn {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    .go-sign-up {
      display: flex;
      justify-content: end;
      text-decoration: underline;
      color: blue
    }
  }
`