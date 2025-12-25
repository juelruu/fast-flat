import { MyButton, type TUser } from '@/shared';

export function UserMenu({ user }: {user: TUser}) {
  return <><MyButton>{user.name}</MyButton></>;
}
