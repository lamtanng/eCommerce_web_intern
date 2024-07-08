import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { productFeature } from '../../constants/features/adminFeatures';
const Product = lazy(() => import('./Product'));

export const ProductRoutes: RouteObject = {
  path: productFeature.path,
  element: (
    <Suspense fallback={<CircularProgress />}>
      <Product />
    </Suspense>
  ),
};
