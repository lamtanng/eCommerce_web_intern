import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { loginFeature } from '../../constants/features/publicFeatures';
const Login = lazy(() => import('./Login'));

export const LoginRoutes: RouteObject = {
  path: loginFeature.path,
  element: (
    <Suspense fallback={<CircularProgress />}>
      <Login />
    </Suspense>
  ),
};
