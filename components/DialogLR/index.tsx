import { Button } from "@mui/material";
import IProps from "./interface";
import { DialogContainer } from "./style";

export default function DialogLR(props: IProps) {
  const { title, title1, open, children, onCancel, onSubmit, submitBtn } = props;
  return (
    <DialogContainer open={true}>
      <div className="dialog-container">
        <h1>{title}</h1>
        <div className="modal-body">{children}</div>
        <div className="group-btn">
          <Button variant="contained" color="error" onClick={onCancel} >Cancel</Button>
          <Button variant="contained" color="success" onClick={onSubmit} >{submitBtn ?? "OK"}</Button>
        </div>
        <div className="go-sign-up">{title1}</div>
      </div>
    </DialogContainer>
  )
}
