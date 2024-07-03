import { CircularProgress } from '@mui/material';
import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const Home = lazy(() => import('./Home'));

export const HomeRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<CircularProgress />}>
        <Home />
      </Suspense>
    ),
  },
];
