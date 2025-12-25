import type { TUser } from './user.type';

export type TAuthState = {
  user: TUser | null;
  token: string | null;
};
