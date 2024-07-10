import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../components/elements/skeletons/PageSkeleton';
import { loginFeature } from '../../constants/features/publicFeatures';
const Login = lazy(() => import('.'));

export const LoginRoutes: RouteObject = {
  path: loginFeature.path,
  element: (
    <Suspense fallback={<PageSkeleton />}>
      <Login />
    </Suspense>
  ),
};
