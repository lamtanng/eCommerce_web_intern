import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../components/elements/skeletons/PageSkeleton';
import { categoryFeature } from '../../constants/features/adminFeatures';
const Category = lazy(() => import('./Category'));

export const CategoryRoutes: RouteObject = {
  path: categoryFeature.path,
  element: (
    <Suspense fallback={<PageSkeleton />}>
      <Category />
    </Suspense>
  ),
};
