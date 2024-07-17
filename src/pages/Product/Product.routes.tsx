import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SpinnerSkeleton from '../../components/elements/skeletons/SpinnerSkeleton';
import { productFeature } from '../../constants/features/adminFeatures';
const Product = lazy(() => import('.'));

export const ProductRoutes: RouteObject = {
  path: productFeature.path,
  element: (
    <Suspense fallback={<SpinnerSkeleton />}>
      <Product />
    </Suspense>
  ),
};
