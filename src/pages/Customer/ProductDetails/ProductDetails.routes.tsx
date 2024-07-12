import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../../components/elements/skeletons/PageSkeleton';
const ProductDetails = lazy(() => import('.'));

export const ProductDetailsRoutes: RouteObject = {
  path: '/products/:productUrl',
  element: (
    <Suspense fallback={<PageSkeleton />}>
      <ProductDetails />
    </Suspense>
  ),
};
