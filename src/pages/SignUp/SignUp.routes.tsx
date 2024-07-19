import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SpinnerSkeleton from '../../components/elements/skeletons/SpinnerSkeleton';
import { signupFeature } from '../../constants/features/publicFeatures';
const SignUp = lazy(() => import('.'));

export const SignUpRoutes: RouteObject = {
  path: signupFeature.path,
  element: (
    <Suspense fallback={<SpinnerSkeleton />}>
      <SignUp />
    </Suspense>
  ),
};
