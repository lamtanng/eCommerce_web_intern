import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface SideBarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

interface AdminHeaderProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

export type { AppBarProps, SideBarProps, AdminHeaderProps };
