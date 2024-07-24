import { Breadcrumbs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export function PageBreadcrumbs() {
  const location = useLocation();
  let crumbLink = '';
  let crumbsArray = location.pathname.split('/').filter((crumb) => crumb !== '');
  const crumbs = crumbsArray.map((crumb, index) => {
    crumbLink += `/${crumb}`;
    return (
      <Link
        key={crumb}
        to={crumbLink}
        className={`${index === crumbsArray.length - 1 ? 'font-medium text-gray-800 hover:text-gray-600' : 'text-gray-500 hover:text-gray-700'} capitalize italic no-underline`}
      >
        {crumb}
      </Link>
    );
  });
  return (
    <Breadcrumbs className="line-clamp-1 sm" aria-label="breadcrumb">
      &#60; {crumbs}
    </Breadcrumbs>
  );
}
