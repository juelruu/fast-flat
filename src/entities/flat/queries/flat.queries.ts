import { queryKeys } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import { getFlatList } from '../api/flat.api';

export const useFlatsQuery = () =>
  useQuery({
    queryKey: queryKeys.flat.list,
    queryFn: () => getFlatList(),
  });
