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
          Component: async () => (await import('@/pages')).HomePage,
        },
      },
      {
        path: 'login',
        lazy: {
          Component: async () => (await import('@/pages')).LoginPage,
        },
      },
      {
        path: 'post-flat',
        lazy: {
          Component: async () => (await import('@/pages')).PostFlatPage,
        },
      },
      {
        path: 'update-flat/:id',
        lazy: async () => {
          const [Component, loader] = await Promise.all([
            import('@/pages/update-flat/update-flat').then(
              (m) => m.UpdateFlatPage
            ),
            import('@/pages/update-flat/update-flat.loader').then(
              (m) => m.loader
            ),
          ]);
          return { Component, loader };
        },
      },
      {
        path: 'client-renting-list',
        lazy: async () => {
          const [Component, loader] = await Promise.all([
            import('@/pages').then((m) => m.ClientRentingListPage),
            import('@/pages').then((m) => m.CanActivateClientRentingListGuard),
          ]);
          return { Component, loader };
        },
      },
      {
        path: 'show-private-flats',
        lazy: async () => {
          const [Component, loader] = await Promise.all([
            import('@/pages').then((m) => m.PrivateFlatListPage),
            import('@/pages/private-flat-list').then(
              (m) => m.CanActivatePrivateFlatListPageGuard
            ),
          ]);
          return { Component, loader };
        },
      },
      {
        path: 'flat-info/:id',
        lazy: async () => {
          const [Component, loader] = await Promise.all([
            import('@/pages').then((m) => m.FlatInfoPage),
            import('@/pages').then((m) => m.FlatInfoLoader),
          ]);
          return { Component, loader };
        },
      },
      {
        path: 'flat-info-private',
        lazy: async () => {
          const [Component] = await Promise.all([
            import('@/pages').then((m) => m.FlatInfoPrivatePage),
          ]);
          return { Component };
        },
      },
    ],
  },
]);
