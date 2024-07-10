import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../components/elements/skeletons/PageSkeleton';
import { signupFeature } from '../../constants/features/publicFeatures';
const SignUp = lazy(() => import('.'));

export const SignUpRoutes: RouteObject = {
  path: signupFeature.path,
  element: (
    <Suspense fallback={<PageSkeleton />}>
      <SignUp />
    </Suspense>
  ),
};
