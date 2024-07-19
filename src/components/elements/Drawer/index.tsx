import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { Button } from '@mui/material';
import { lazy, ReactNode, Suspense, useState } from 'react';
const MuiDrawer = lazy(() => import('@mui/material/Drawer'));

interface DrawerProps {
  children: ReactNode;
  drawerButton?: ReactNode;
  anchor?: 'left' | 'top' | 'right' | 'bottom';
}

export default function Drawer({
  children,
  anchor = 'right',
  drawerButton = <KeyboardArrowLeftRoundedIcon />,
}: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };
  return (
    <>
      <Button onClick={toggleDrawer(true)}>{drawerButton}</Button>
      <Suspense>
        <MuiDrawer anchor={anchor} open={isOpen} onClose={toggleDrawer(false)} variant="temporary">
          {children}
        </MuiDrawer>
      </Suspense>
    </>
  );
}
