import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const Login = lazy(() => import('./Login'));

export const LoginRoutes: RouteObject[] = [
  {
    path: '/login',
    element: (
      <Suspense fallback={<CircularProgress />}>
        <Login />
      </Suspense>
    ),
  },
];
