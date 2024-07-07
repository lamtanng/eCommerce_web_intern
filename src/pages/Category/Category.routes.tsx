import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { categoryFeature } from '../../constants/adminFeatures';
const Category = lazy(() => import('./Category'));

export const CategoryRoutes: RouteObject = {
  path: categoryFeature.path,
  element: (
    <Suspense fallback={<CircularProgress />}>
      <Category />
    </Suspense>
  ),
};
