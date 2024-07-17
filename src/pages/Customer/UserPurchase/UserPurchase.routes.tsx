import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SpinnerSkeleton from '../../../components/elements/skeletons/SpinnerSkeleton';
import { purchaseFeature } from '../../../constants/features/customerFeatures';
const UserPurchase = lazy(() => import('.'));

export const UserPurchaseRoutes: RouteObject = {
  path: purchaseFeature.path,
  element: (
    <Suspense fallback={<SpinnerSkeleton />}>
      <UserPurchase />
    </Suspense>
  ),
};
