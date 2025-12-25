import { createBrowserRouter } from 'react-router';
import App from './App';

export default createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        lazy: {
          Component: async () => (await (import('@/pages'))).HomePage,
        },
      },
      {
        path: 'login',
        lazy: {
          Component: async () => (await (import('@/pages'))).LoginPage
        }
      }
    ]
  },
])