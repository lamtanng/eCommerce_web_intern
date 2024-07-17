import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import ProductDetailsSkeleton from '../../../components/elements/skeletons/ProductDetailsSkeleton';
const ProductDetails = lazy(() => import('./index'));

export const ProductDetailsRoutes: RouteObject = {
  path: '/products/:productUrl',

  element: (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductDetails />
    </Suspense>
  ),
};
