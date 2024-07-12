import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../../components/elements/skeletons/PageSkeleton';
const UserPurchaseDetails = lazy(() => import('.'));

export const UserPurchaseDetailsRoutes: RouteObject = {
  path: '/purchases/:purchaseId',
  element: (
    <Suspense fallback={<PageSkeleton />}>
      <UserPurchaseDetails />
    </Suspense>
  ),
};
