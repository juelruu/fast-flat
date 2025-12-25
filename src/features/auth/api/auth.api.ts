import apiClient from '@/app/providers/api.client';
import type { TGetUserResponse, TLoginResponse } from '@/shared';
/**
 * Получить токен авторизации
 * @param username - пользователь
 * @param password - пароль
 * @returns
 */
export async function login(form: FormData): Promise<TLoginResponse> {
  const { data } = await apiClient.post<TLoginResponse>(
    '/api/v1/auth/jwt/login',
    form
  );
  return data;
}

/**
 * Получить пользователя
 * @param uuid - юид пользователя
 * @returns
 */
export async function getUser(): Promise<TGetUserResponse> {
  // const response = await fetch(`${import.meta.env.BASE_URL}/api/v1/auth/user`, {
  //   method: 'GET',
  //   body: JSON.stringify({ token })
  // });
  // return response.json();
  return Promise.resolve<TGetUserResponse>({
    user: {
      img: 'ttt',
      name: 'test name',
    },
  });
}
