import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import SpinnerSkeleton from '../../components/elements/skeletons/SpinnerSkeleton';
import { categoryFeature } from '../../constants/features/adminFeatures';
const Category = lazy(() => import('.'));

export const CategoryRoutes: RouteObject = {
  path: categoryFeature.path,
  element: (
    <Suspense fallback={<SpinnerSkeleton />}>
      <Category />
    </Suspense>
  ),
};
