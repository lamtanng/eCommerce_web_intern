import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { signupFeature } from '../../constants/features/publicFeatures';
const SignUp = lazy(() => import('./SignUp'));

export const SignUpRoutes: RouteObject = {
  path: signupFeature.path,
  element: (
    <Suspense fallback={<CircularProgress />}>
      <SignUp />
    </Suspense>
  ),
};
