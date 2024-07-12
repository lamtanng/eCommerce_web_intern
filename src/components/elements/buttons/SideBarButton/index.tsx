import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FeaturesProps } from '../../../../constants/features/features.type';

export default function SideBarButton({ title, path, icon }: FeaturesProps) {
  return (
    <NavLink
      className="mx-auto w-full overflow-hidden pl-4 hover:bg-[#f0f8ff] hover:font-medium"
      to={path}
      style={({ isActive }) => {
        return {
          display: 'block',
          backgroundColor: isActive ? ' #f0f8ff' : '#ffffff',
          color: isActive ? '#1976d2' : '#333333',

          textDecoration: 'none',
        };
      }}
    >
      <div className="mx-auto flex w-full flex-row items-center gap-4 px-4 py-3">
        {!!icon && <div className="pt-1 text-blue-500">{icon}</div>}
        <Typography variant="subtitle1">{title}</Typography>
      </div>
    </NavLink>
  );
}
