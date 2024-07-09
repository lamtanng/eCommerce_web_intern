import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../components/elements/skeletons/PageSkeleton';
import { purchaseFeature } from '../../constants/features/adminFeatures';
const Purchase = lazy(() => import('./Purchase'));

export const PurchaseRoutes: RouteObject = {
  path: purchaseFeature.path,
  element: (
    <Suspense fallback={<PageSkeleton />}>
      <Purchase />
    </Suspense>
  ),
};
