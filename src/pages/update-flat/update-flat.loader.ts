import { getFlatById } from '@/entities/flat/api';
import { isNotNuN } from '@/shared';
import type { LoaderFunctionArgs } from 'react-router';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  if (!isNotNuN(id)) return;
  return { flat: (await getFlatById(id)).data };
};
