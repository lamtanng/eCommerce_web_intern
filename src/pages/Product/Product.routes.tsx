import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../components/elements/skeletons/PageSkeleton';
import { productFeature } from '../../constants/features/adminFeatures';
const Product = lazy(() => import('./Product'));

export const ProductRoutes: RouteObject = {
  path: productFeature.path,
  element: (
    <Suspense fallback={<PageSkeleton />}>
      <Product />
    </Suspense>
  ),
};
