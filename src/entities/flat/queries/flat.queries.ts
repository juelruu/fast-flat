import { queryKeys } from '@/shared';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createRentingFlat,
  getFlatById,
  getFlatList,
  getPrivateFlatList,
  getRentingList,
  postFlat,
  updateFlat,
} from '../api';
import type {
  TCreateRentingFlatFormData,
  TPostFlatRequestData,
  TUpdateFlatRequestData,
} from '../model';
import { format } from 'date-fns';

export const useFlatsQuery = () =>
  useQuery({
    queryKey: queryKeys.flat.list(),
    queryFn: () => getFlatList(),
  });

export const usePrivateFlatsQuery = () =>
  useQuery({
    queryKey: queryKeys.flat.privateList(),
    queryFn: () => getPrivateFlatList(),
  });

export const useFlatQuery = (id: string) =>
  useQuery({
    queryKey: queryKeys.flat.byId(id),
    queryFn: () => getFlatById(id),
  });

export const usePostFlatMutation = () =>
  useMutation({
    mutationFn: (data: TPostFlatRequestData) => postFlat(data),
  });

export const useUpdatePostFlatMutation = () =>
  useMutation({
    mutationFn: (data: TUpdateFlatRequestData) => updateFlat(data),
  });

export const useRentingListQuery = () =>
  useQuery({
    queryKey: queryKeys.renting.list(),
    queryFn: () => getRentingList(),
  });

export const useCreateRentingFlatMutation = () =>
  useMutation({
    mutationFn: (data: TCreateRentingFlatFormData) => {
      const rent = {
        ...data,
        lease_range: {
          start: format(data.lease_range.start, 'yyyy-MM-dd'),
          end: format(data.lease_range.end, 'yyyy-MM-dd'),
        },
      };
      return createRentingFlat(rent);
    }
  });
