import './index.css';
import '~/font-awesome/css/all.min.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import router from './app/router.config';
import queryClient from './app/providers/query.client';
import { RouterProvider } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
