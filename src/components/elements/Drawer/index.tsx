import { Button, Drawer as MuiDrawer } from '@mui/material';
import { ReactNode, useState } from 'react';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

interface DrawerProps {
  children: ReactNode;
  drawerButton?: ReactNode;
  anchor?: 'left' | 'top' | 'right' | 'bottom';
}

export function Drawer({ children, anchor = 'right', drawerButton = <KeyboardArrowLeftRoundedIcon /> }: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };
  return (
    <>
      <Button onClick={toggleDrawer(true)}>{drawerButton}</Button>
      <MuiDrawer anchor={anchor} open={isOpen} onClose={toggleDrawer(false)}>
        {children}
      </MuiDrawer>
    </>
  );
}
