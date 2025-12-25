import apiClient from '@/app/providers/api.client';
import type { TGetFlatListResponse } from '../model';

export async function getFlatList(): Promise<TGetFlatListResponse> {
  const { data } = await apiClient.get<TGetFlatListResponse>('/api/v1/flat');
  return data;
}
