import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import { AlertTitle, Button } from '@mui/material';
import AuthContext from '../auth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

export default function MUILoginFailModal(){
    const { auth } = useContext(AuthContext);
    const errorMessage = auth.message;

    function handleCloseModal(){
        auth.errorMessage = "";
        auth.closeLoginErrorModal();
    }
    
    return(
        <Modal open = {auth.loginFailFlag === true}>
            <Box sx = {style}>
                <Alert severity='warning'>
                    <AlertTitle>
                        Warning
                    </AlertTitle>
                    {errorMessage}
                    <Button variant = "Contained" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Alert>
            </Box>
        </Modal>
    );
}