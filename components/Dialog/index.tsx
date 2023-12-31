import { DialogContainer } from './style';
import IProps from './interface';
import { Button, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

export default function Dialog(props: IProps) {
    const { open, children, title } = props;
    
    return (
        <DialogContainer open={open}>
            {/* <ModalDialog open={open ?? false}> */}
            <div className="dialog-Container">
                    <h3>{title}</h3>
                    {/* <TextField
                        className='text-field'
                        name='todo'
                        value={value}
                        onChange={onChangeDialog}
                    /> */}
                    <div className="group-btn">
                        <Button variant="outlined" color="success" >Update</Button>
                        <Button variant="outlined" color='error' >Cancel</Button>
                    </div>
                </div>
        </DialogContainer>
    )
}
