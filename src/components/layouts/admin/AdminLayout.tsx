import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { DrawerHeader, Main } from './AdminLayout.styled';
import AdminHeader from './Header';
import SideBar from './SideBar';

export default function AdminLayout() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AdminHeader open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open} sx={{ position: 'relative', height: '100vh' }}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
