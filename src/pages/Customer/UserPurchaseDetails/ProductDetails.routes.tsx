import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SpinnerSkeleton from '../../../components/elements/skeletons/SpinnerSkeleton';
const UserPurchaseDetails = lazy(() => import('.'));

export const UserPurchaseDetailsRoutes: RouteObject = {
  path: '/purchases/:purchaseId',
  element: (
    <Suspense fallback={<SpinnerSkeleton />}>
      <UserPurchaseDetails />
    </Suspense>
  ),
};
