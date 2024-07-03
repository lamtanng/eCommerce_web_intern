import { AppBar, Box, Button, MenuItem, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/react.svg';

export default function Header() {
  return (
    <AppBar color='transparent' position='fixed' className='max-w-screen-xl mx-auto'>
      <Stack direction='row' spacing={10} justifyContent='space-between' alignItems='center'>
        <Box>
          <img src={Logo} alt='' />
        </Box>

        <Stack direction='row' spacing={4}>
          <MenuItem>
            <NavLink to='/'>Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/'>Product</NavLink>
          </MenuItem>
        </Stack>

        {/* Sign-in/Sign-up */}
        <Stack direction='row' spacing={4}>
          <Button variant='text' size='small'>
            Sign In
          </Button>
          <Button size='small'>Sign Up</Button>
        </Stack>
      </Stack>
    </AppBar>
  );
}
