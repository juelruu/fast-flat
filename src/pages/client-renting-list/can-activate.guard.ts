import { getAuthToken } from '@/shared';
import { redirect } from 'react-router';

export async function CanActivateClientRentingListGuard() {
  const isAuth = getAuthToken();

  if (!isAuth) {
    throw redirect('/login');
  }

  return null;
}
