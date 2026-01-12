import { useMutation, useQuery } from '@tanstack/react-query';
import { login } from '../api';
import queryClient from '@/app/providers/query.client';
import { queryKeys } from '@/shared';
import { getUser } from '../api/user.api';

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (data: FormData) => login(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.user.root,
      });
    },
  });

export const useUserQuery = (token: string | null) =>
  useQuery({
    queryKey: queryKeys.auth.user(token ?? ''),
    queryFn: () => getUser(),
  });
