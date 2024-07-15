import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ReactNode } from 'react';
import { SlideUpTransition } from '../../SlideUpTransition';
import useStateRef from 'react-usestateref';

export interface DialogFormButtonProps {
  dialogButton?: ReactNode | string;
  title?: string;
  variant?: 'text' | 'contained' | 'outlined';
  description?: string;
  children: ReactNode | null;
  isOpen?: boolean;
}

export default function DialogFormButton({
  dialogButton = <BorderColorRoundedIcon />,
  title,
  variant = 'text',
  description,
  children = null,
  isOpen = false,
}: DialogFormButtonProps) {
  const [open, setOpen] = useStateRef(isOpen);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log('isOpen', isOpen);

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
        className="relative"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent className="">
          <DialogContentText id="alert-dialog-slide-description">{description}</DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
}
