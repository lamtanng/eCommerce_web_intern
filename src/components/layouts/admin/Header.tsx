import { IconButton, Toolbar, Typography } from '@mui/material';
import { AppBar } from './AdminLayout.styled';
import MenuIcon from '@mui/icons-material/Menu';
import { AdminHeaderProps } from './AdminLayout.types';

export default function AdminHeader({ open, handleDrawerOpen }: AdminHeaderProps) {
  return (
    <AppBar position='fixed' open={open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>

        {/* Breadcrums here */}
        <Typography variant='h6' noWrap component='div'>
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
