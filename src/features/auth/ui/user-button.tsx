import { useUserStore } from '@/entities';
import { MyButton } from '@/shared';

export function UserButton() {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <MyButton>{user?.email}</MyButton>
    </>
  );
}
