import { ThemeProvider } from '@/ui/theme-provider';
import { RouterProvider } from 'react-router/dom';
import { router } from './router';

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
