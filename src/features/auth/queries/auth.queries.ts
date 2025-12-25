import { useMutation } from '@tanstack/react-query';
import { login } from '../api';
import queryClient from '@/app/providers/query.client';
import { queryKeys } from '@/shared';
import { getUser } from '../api/auth.api';

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (data: FormData) => login(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.user.root,
      });
    },
  });

export const useUserMutation = () =>
  useMutation({
    mutationFn: () => getUser(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.user.root,
      });
    },
  });
