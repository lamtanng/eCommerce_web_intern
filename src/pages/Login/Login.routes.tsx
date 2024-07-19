import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SpinnerSkeleton from '../../components/elements/skeletons/SpinnerSkeleton';
import { loginFeature } from '../../constants/features/publicFeatures';
const Login = lazy(() => import('.'));

export const LoginRoutes: RouteObject = {
  path: loginFeature.path,
  element: (
    <Suspense fallback={<SpinnerSkeleton />}>
      <Login />
    </Suspense>
  ),
};
