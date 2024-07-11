import { NavLink } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FeaturesProps } from '../../../../constants/features/features.type';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function SideBarButton({ title, path, icon }: FeaturesProps) {
  return (
    <NavLink
      className="mx-auto overflow-hidden rounded-lg px-5"
      to={path}
      style={({ isActive }) => {
        return {
          display: 'block',
          backgroundColor: isActive ? '#1976d2' : '#ffffff',
          color: isActive ? '#ffffff' : 'black',
          textDecoration: 'none',
        };
      }}
    >
      <ListItemButton className="mx-auto min-w-32 px-0">
        {!!icon && <ListItemIcon className="text-blue-500">{icon}</ListItemIcon>}
        <ListItemText primary={title} />
      </ListItemButton>
    </NavLink>
  );
}
