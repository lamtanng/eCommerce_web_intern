import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../../components/elements/skeletons/PageSkeleton';
import { productFeature } from '../../../constants/features/publicFeatures';
const UserProduct = lazy(() => import('.'));

export const UserProductRoutes: RouteObject = {
  path: productFeature.path,
  element: (
    <Suspense fallback={<PageSkeleton />}>
      <UserProduct />
    </Suspense>
  ),
  // children: [ProductDetailsRoutes],
};
