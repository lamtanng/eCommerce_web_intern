import { AppBar, Box, Button, MenuItem, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/react.svg';
import useAuth from '../../../hooks/useAuth';

export default function Header() {
  const { auth } = useAuth();

  return (
    <AppBar position='fixed' className='px-page_gutter_lg bg-white h-header_height'>
      <Stack direction='row' spacing={10} justifyContent='space-between' alignItems='center'>
        <Box>
          <img src={Logo} alt='' />
        </Box>

        <Stack direction='row' spacing={4}>
          <MenuItem>
            <NavLink to='/'>Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/product'>Product</NavLink>
          </MenuItem>
        </Stack>

        {/* Sign-in/Sign-up */}
        {!auth?.accessToken ? (
          <Stack direction='row' spacing={4}>
            <Button variant='text' size='small'>
              Sign In
            </Button>
            <Button size='small'>Sign Up</Button>
          </Stack>
        ) : (
          <Stack direction='row' spacing={4}>
            <Button variant='text' size='small'>
              Sign out
            </Button>
          </Stack>
        )}
      </Stack>
    </AppBar>
  );
}
