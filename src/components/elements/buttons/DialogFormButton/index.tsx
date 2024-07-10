import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ReactNode, useState } from 'react';
import { SlideUpTransition } from '../SlideUpTransition';

export interface DialogFormButtonProps {
  dialogButton?: ReactNode | string;
  title?: string;
  variant?: 'text' | 'contained' | 'outlined';
  description?: string;
  children: ReactNode | null;
}

export default function DialogFormButton({
  dialogButton = <BorderColorRoundedIcon />,
  title,
  variant = 'text',
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
        fullWidth
        maxWidth="sm"
        aria-describedby="alert-dialog-slide-description"
        className="w-56"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent className="w-56">
          <DialogContentText id="alert-dialog-slide-description">{description}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}
