import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SpinnerSkeleton from '../../components/elements/skeletons/SpinnerSkeleton';
import { purchaseFeature } from '../../constants/features/adminFeatures';
const Purchase = lazy(() => import('.'));

export const PurchaseRoutes: RouteObject = {
  path: purchaseFeature.path,
  element: (
    <Suspense fallback={<SpinnerSkeleton />}>
      <Purchase />
    </Suspense>
  ),
};
