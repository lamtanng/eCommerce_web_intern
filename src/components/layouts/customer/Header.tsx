import Logout from '@mui/icons-material/Logout';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from '@mui/material';
import { useState } from 'react';
import { logout } from '../../../apis/auth.api';
import Logo from '../../../assets/react.svg';
import { usePrevLocation } from '../../../hooks/usePrevLocation';
import { getStoredAuth, removeAuth } from '../../../ultils/authToken';
import { loginFeature, productFeature, signupFeature } from '../../../constants/features/publicFeatures';
import { NavLink } from 'react-router-dom';
import { purchaseFeature } from '../../../constants/features/customerFeatures';
import SideBarButton from '../../elements/buttons/SideBarButton';

export default function Header() {
  const auth = getStoredAuth();
  const { toPrevLocation } = usePrevLocation();
  const doLogout = async () => {
    await logout({ refreshToken: auth.refreshToken });
    removeAuth();
    toPrevLocation();
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className="h-header_height bg-white px-page_gutter_lg shadow-md">
      <Stack direction="row" spacing={10} justifyContent="space-between" alignItems="center" className="h-full">
        <Box>
          <Link href={productFeature.path} underline="none">
            <img src={Logo} alt="" />
          </Link>
        </Box>

        <Stack direction="row" spacing={3}>
          <NavLink
            to={productFeature.path}
            className={({ isActive, isPending, isTransitioning }) =>
              [isActive ? 'text-green-500' : 'text-gray-200', isPending ? '' : '', isTransitioning ? '' : ''].join(
                'leading-header inline-block h-full border-b border-b-blue-500 font-normal text-gray-900 no-underline transition-all duration-100 ease-in-out hover:border-b hover:font-medium',
              )
            }
          >
            {productFeature.title}
          </NavLink>
          <NavLink
            to={purchaseFeature.path}
            className={({ isActive, isPending, isTransitioning }) =>
              [isActive ? 'text-green-500' : 'text-gray-200', isPending ? '' : '', isTransitioning ? '' : ''].join(
                'leading-header inline-block h-full border-b border-b-blue-500 font-normal text-gray-900 no-underline transition-all duration-100 ease-in-out hover:border-b hover:font-medium',
              )
            }
          >
            {purchaseFeature.title}
          </NavLink>
        </Stack>

        {/* Sign-in/Sign-up */}
        {!auth?.accessToken ? (
          <Stack direction="row" spacing={2}>
            <Link href={loginFeature.path} underline="none">
              <Button variant="outlined" size="medium">
                Sign In
              </Button>
            </Link>
            <Link href={signupFeature.path} underline="none">
              <Button variant="contained" size="medium">
                Sign Up
              </Button>
            </Link>
          </Stack>
        ) : (
          <Stack direction="row" spacing={4}>
            <Stack direction="row" spacing={4}>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Stack>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                className="w-72"
                PaperProps={{
                  elevation: 0,
                  sx: {
                    width: 200,
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>

                <MenuItem onClick={handleClose} className="w-full">
                  <SideBarButton
                    path={purchaseFeature.path}
                    title={purchaseFeature.title}
                    // icon={purchaseFeature.icon}
                  />
                </MenuItem>
                <Divider />

                <MenuItem onClick={doLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Stack>
          </Stack>
        )}
      </Stack>
    </AppBar>
  );
}
