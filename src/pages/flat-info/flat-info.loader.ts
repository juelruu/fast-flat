import { getFlatById } from '@/entities/flat/api';
import { isNotNuN } from '@/shared';
import type { LoaderFunctionArgs } from 'react-router';

export const FlatInfoLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  console.log('[id]',id)
  if (!isNotNuN(id)) return;
  return { flat: (await getFlatById(id)).data };
};
