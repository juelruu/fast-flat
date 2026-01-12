export type TUser = {
  id: string;
  telegram_contact: string;
  email: string;
};

export type TLoginResponse = {
  access_token: string;
  token_type: string;
};

export type TGetUserResponse = TUser;
