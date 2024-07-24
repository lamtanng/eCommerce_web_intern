import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@mui/material/styles';
import { adminFeatures } from '../../../constants/features/adminFeatures';
import { DrawerHeader, drawerWidth } from './AdminLayout.styled';
import { SideBarProps } from './AdminLayout.types';
import SideBarButton from '../../elements/buttons/SideBarButton';
import { Avatar, ListItemIcon, MenuItem, Stack, Tooltip, Typography } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import { getStoredAuth, removeAuth } from '../../../ultils/authToken';
import { usePrevLocation } from '../../../hooks/usePrevLocation';
import { logout } from '../../../apis/auth.api';
import { loginFeature } from '../../../constants/features/publicFeatures';

export default function SideBar({ open, handleDrawerClose }: SideBarProps) {
  const theme = useTheme();
  const auth = getStoredAuth();
  const { navigate } = usePrevLocation();
  const doLogout = async () => {
    await logout({ refreshToken: auth.refreshToken });
    removeAuth();
    navigate(loginFeature.path);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        overflow: 'hidden',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <Stack
        direction="column"
        spacing={2}
        className="h-full overflow-hidden"
        justifyContent="space-between"
        alignItems="start"
      >
        <Stack className="">
          <DrawerHeader>
            <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
              <Tooltip title="Welcome, Admin !">
                <IconButton
                  // onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>AD</Avatar>
                </IconButton>
              </Tooltip>
              <Typography variant="body2" noWrap>
                Welcome, Admin!
              </Typography>
            </Stack>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {adminFeatures.map((feature, index) => (
              <ListItem key={index} disablePadding>
                <SideBarButton path={feature.path} title={feature.title} icon={feature.icon} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Stack>

        <MenuItem
          className="mx-auto mb-5 w-full overflow-hidden py-3 text-red-500 hover:font-medium"
          onClick={doLogout}
        >
          <ListItemIcon className="px-5 text-red-500">
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Stack>
    </Drawer>
  );
}
