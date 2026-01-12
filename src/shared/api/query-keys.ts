export const queryKeys = {
  auth: {
    root: ['auth'] as const,
    user: (token: string) =>
      [...queryKeys.auth.root, 'user', token] as const,
    login: (phone: string, accessKey: string) =>
      [...queryKeys.auth.root, 'login', phone, accessKey] as const,
    logout: () => [...queryKeys.auth.root, 'logout'] as const,
  },
  user: {
    root: ['user'] as const,
  },
  flat: {
    root: ['flat'] as const,
    byId: (id: string) => [...queryKeys.flat.root, id] as const,
    list: () => [...queryKeys.flat.root, 'all'] as const,
    privateList: () => [...queryKeys.flat.list(), 'private'] as const,
  },
  renting: {
    root: ['renting'] as const,
    list: () => [...queryKeys.renting.root, 'all'] as const,
  },
};
