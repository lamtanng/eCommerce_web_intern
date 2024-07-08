import { AppBar, Box, Button, MenuItem, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/react.svg';
import { getStoredAuth, removeAuth } from '../../../ultils/authToken';
import { logout } from '../../../apis/auth.api';
import { usePrevLocation } from '../../../hooks/usePrevLocation';

export default function Header() {
  const auth = getStoredAuth();
  const { toPrevLocation } = usePrevLocation();
  const doLogout = async () => {
    const resp = await logout(auth.refreshToken);
    removeAuth();
    toPrevLocation();
  };
  return (
    <AppBar position="fixed" className="h-header_height bg-white px-page_gutter_lg">
      <Stack direction="row" spacing={10} justifyContent="space-between" alignItems="center">
        <Box>
          <img src={Logo} alt="" />
        </Box>

        <Stack direction="row" spacing={4}>
          <MenuItem>
            <NavLink to="/">Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/product">Product</NavLink>
          </MenuItem>
        </Stack>

        {/* Sign-in/Sign-up */}
        {!auth?.accessToken ? (
          <Stack direction="row" spacing={4}>
            <Button variant="text" size="small">
              Sign In
            </Button>
            <Button size="small">Sign Up</Button>
          </Stack>
        ) : (
          <Stack direction="row" spacing={4}>
            <Button variant="text" size="small" onClick={doLogout}>
              Sign out
            </Button>
          </Stack>
        )}
      </Stack>
    </AppBar>
  );
}
