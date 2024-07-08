import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { purchaseFeature } from '../../constants/adminFeatures';
const Purchase = lazy(() => import('./Purchase'));

export const PurchaseRoutes: RouteObject = {
  path: purchaseFeature.path,
  element: (
    <Suspense fallback={<CircularProgress />}>
      <Purchase />
    </Suspense>
  ),
};
