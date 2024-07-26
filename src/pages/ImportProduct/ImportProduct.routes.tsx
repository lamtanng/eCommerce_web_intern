import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SpinnerSkeleton from '../../components/elements/skeletons/SpinnerSkeleton';
import { importProductFeature } from '../../constants/features/adminFeatures';
const ImportProduct = lazy(() => import('.'));

export const ImportProductRoutes: RouteObject = {
  path: importProductFeature.path,
  element: (
    <Suspense fallback={<SpinnerSkeleton />}>
      <ImportProduct />
    </Suspense>
  ),
};
