import { NavLink } from 'react-router-dom';
import { ListItemButton, ListItemText } from '@mui/material';
import { FeaturesProps } from '../../../constants/features/features.type';

export default function SideBarButton({ title, path }: FeaturesProps) {
  return (
    <NavLink
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
      <ListItemButton>
        {/* <ListItemIcon color='white'>{icon}</ListItemIcon> */}
        <ListItemText primary={title} />
      </ListItemButton>
    </NavLink>
  );
}