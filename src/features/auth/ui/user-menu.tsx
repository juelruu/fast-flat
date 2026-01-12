import { useUserStore } from '@/entities';
import { useUserQuery } from '@/entities';
import { UserButton } from './user-button';
import { getAuthToken } from '@/shared';
import { useEffect } from 'react';

export function UserMenu() {
  const setUser = useUserStore((state) => state.setUser);
  const { data, isSuccess } = useUserQuery(getAuthToken());
  useEffect(() => {
    if (isSuccess && data) setUser(data);
  });

  return (
    <>
      <UserButton />
    </>
  );
}
