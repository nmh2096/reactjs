import { DialogDeleteContainer } from "./style";
import { Button } from "@mui/material";
import IProps from "./interface";

export default function DeleteDialog(props: IProps) {
  const { open, onCancel, onSubmit, submitBtn } = props;
  return (
    <DialogDeleteContainer open = {open}>
      <div className="dialog-Container">
        <h3>Are you sure?</h3>
        <div className="group-btn">
          <Button variant="outlined" color='error' onClick={onCancel} >Cancel</Button>
          <Button variant="outlined" color="success" onClick={onSubmit}>{submitBtn ?? 'OK'}</Button>
        </div>
      </div>
    </DialogDeleteContainer >
  )
}
