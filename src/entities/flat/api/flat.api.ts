import apiClient from '@/app/providers/api.client';
import type {
  TCreateRentingFlatRequestData,
  TFlat,
  TGetFlatListResponse,
  TGetFlatResponse,
  TGetPrivateFlatListResponse,
  TGetRentingListResponse,
  TPostFlatRequestData,
  TUpdateFlatRequestData,
} from '../model';
import type { AxiosResponse } from 'axios';

const baseUrl = '/api/v1';
const flatUrl = `${baseUrl}/flat`;
const rentingUrl = `${baseUrl}/renting`;

export async function getFlatList(): Promise<TGetFlatListResponse> {
  const { data } = await apiClient.get<TGetFlatListResponse>(flatUrl);
  return data;
}

export async function getPrivateFlatList(): Promise<TGetPrivateFlatListResponse> {
  return (
    await apiClient.get<TGetPrivateFlatListResponse>(`${flatUrl}/private`)
  ).data;
}

export function getFlatById(
  id: TFlat['id']
): Promise<AxiosResponse<TGetFlatResponse>> {
  return apiClient.get<TGetFlatResponse>(`${flatUrl}/${id}`);
}

export async function postFlat(
  flat: TPostFlatRequestData
): Promise<TGetFlatListResponse> {
  const { data } = await apiClient.post<TGetFlatListResponse>(flatUrl, flat);
  return data;
}

export async function updateFlat(
  flat: TUpdateFlatRequestData
): Promise<TGetFlatListResponse> {
  const { data } = await apiClient.post<TGetFlatListResponse>(flatUrl, flat);
  return data;
}

export async function getRentingList(): Promise<TGetRentingListResponse> {
  const { data } = await apiClient.get<TGetRentingListResponse>(
    `${rentingUrl}/private`
  );
  return data;
}

export async function createRentingFlat(
  requestData: TCreateRentingFlatRequestData
) {
  return (await apiClient.post<string>(rentingUrl, requestData));
}
