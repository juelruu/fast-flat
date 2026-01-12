import apiClient from '@/app/providers/api.client';
import type { AxiosResponse } from 'axios';
import type { TGetUserResponse, TLoginResponse } from '../model';

const baseUrl = '/api/v1/auth';

/**
 * Получить токен авторизации
 * @param username - пользователь
 * @param password - пароль
 * @returns
 */
export function login(form: FormData): Promise<AxiosResponse<TLoginResponse>> {
  return apiClient.post<TLoginResponse>(`${baseUrl}/jwt/login`, form);
}

export function register(
  form: FormData
): Promise<AxiosResponse<TLoginResponse>> {
  return apiClient.post<TLoginResponse>(`${baseUrl}/jwt/login`, form);
}

export function logout(): Promise<AxiosResponse<unknown>> {
  return apiClient.post<unknown>(`${baseUrl}/jwt/logout`);
}

/**
 * Получить пользователя
 * @param uuid - юид пользователя
 * @returns
 */
export async function getUser(): Promise<TGetUserResponse> {
  const { data } = await apiClient.get<TGetUserResponse>(`${baseUrl}/me`);
  return data;
}
