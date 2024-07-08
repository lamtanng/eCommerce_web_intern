import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
// import { SignUpFeature } from '../../constants/adminFeatures';
const SignUp = lazy(() => import('./SignUp'));

export const SignUpRoutes: RouteObject = {
  path: "",
  element: (
    <Suspense fallback={<CircularProgress />}>
      <SignUp />
    </Suspense>
  ),
};
