import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ReactNode, useState } from 'react';
import { SlideUpTransition } from '../transition/SlideUpTransition';

export interface DialogFormButtonProps {
  dialogButton: ReactNode | string;
  title?: string;
  variant?: 'text' | 'contained' | 'outlined';
  description?: string;
  children: ReactNode | null;
}

export default function DialogFormButton({
  dialogButton = 'Dialog',
  title,
  variant = 'contained',
  description,
  children = null,
}: DialogFormButtonProps) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant={variant} onClick={handleClickOpen}>
        {dialogButton}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={SlideUpTransition}
        keepMounted
        onClose={handleClose}
        maxWidth='xl'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>{description}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}
