import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SpinnerSkeleton from '../../../components/elements/skeletons/SpinnerSkeleton';
import { productFeature } from '../../../constants/features/publicFeatures';
const UserProduct = lazy(() => import('.'));

export const UserProductRoutes: RouteObject = {
  path: productFeature.path,
  index: true,
  element: (
    <Suspense>
      <UserProduct />
    </Suspense>
  ),
};
