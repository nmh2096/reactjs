import { Button } from '@mui/material';
import IProps from './interface';
import { DialogContainer } from './style';

export default function Dialog(props: IProps) {
    const { open, children, title, submitBtn, onCancel, onSubmit  } = props;

    return (
        <DialogContainer open={open}>
            {/* <ModalDialog open={open ?? false}> */}
            <div className="dialog-Container">
                <h3>{title}</h3>
                <div className="modal-input">
                    {children}
                </div>
                <div className="group-btn">
                    <Button variant="outlined" color='error' onClick={onCancel} >Cancel</Button>
                    <Button variant="outlined" color="success" onClick={onSubmit}>{submitBtn ?? 'OK'}</Button>
                </div>
            </div>
        </DialogContainer>
    )
}
