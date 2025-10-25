import { ROUTES } from '@/lib/routes';
import { Home } from '@/pages/home';
import { NotFound } from '@/pages/not-found';
import { Skills } from '@/pages/skills';
import { Layout } from '@/ui/layout';
import { createBrowserRouter, Navigate } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
      {
        path: ROUTES.skills,
        element: <Skills />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.home} />,
  },
]);
