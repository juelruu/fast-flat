export const queryKeys = {
  auth: {
    root: ['auth'] as const,
    accessKey: (phone: string) =>
      [...queryKeys.auth.root, 'access-key', phone] as const,
    login: (phone: string, accessKey: string) =>
      [...queryKeys.auth.root, 'login', phone, accessKey] as const,
    logout: () => [...queryKeys.auth.root, 'logout'] as const,
  },
  user: {
    root: ['user'] as const,
  },
  flat: {
    root: ['flat'] as const,
    list: ['flat', 'all'] as const
  }
};
