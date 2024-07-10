import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import PageSkeleton from '../../components/elements/skeletons/PageSkeleton';
const Home = lazy(() => import('.'));

export const HomeRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<PageSkeleton />}>
        <Home />
      </Suspense>
    ),
  },
];
