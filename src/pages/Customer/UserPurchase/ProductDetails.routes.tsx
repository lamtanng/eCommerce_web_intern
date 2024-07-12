import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../../components/elements/skeletons/PageSkeleton';
import { purchaseFeature } from '../../../constants/features/customerFeatures';
const UserPurchase = lazy(() => import('.'));

export const UserPurchaseRoutes: RouteObject = {
  path: purchaseFeature.path,
  element: (
    <Suspense fallback={<PageSkeleton />}>
      <UserPurchase />
    </Suspense>
  ),
};
