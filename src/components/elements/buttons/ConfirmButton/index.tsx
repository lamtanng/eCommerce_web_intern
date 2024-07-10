import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { SlideUpTransition } from '../../SlideUpTransition';

export interface ConfirmButtonProps {
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: Function | undefined;
}

export default function ConfirmButton({
  title = 'Are you sure you want to delete?',
  description = 'This action cannot be undone. Click Delete if you are certain you would like to delete it.',
  cancelText = 'Cancel',
  confirmText = 'Delete',
  onConfirm,
}: ConfirmButtonProps) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="text" onClick={handleClickOpen} color="error">
        <DeleteForeverRoundedIcon />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={SlideUpTransition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{cancelText}</Button>
          <Button
            onClick={() => {
              handleClose();
              onConfirm ? onConfirm() : undefined;
            }}
          >
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
