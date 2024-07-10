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

export default function SideBar({ open, handleDrawerClose }: SideBarProps) {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
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
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {adminFeatures.map((feature, index) => (
          <ListItem key={index} disablePadding>
            <SideBarButton path={feature.path} title={feature.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
