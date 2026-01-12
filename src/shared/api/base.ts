let _token: string | null = null;
let _tokenType: string | null = null;

const LOCAL_HOST_TOKEN_KEY = 'auth-token';
const LOCAL_HOST_TOKEN_TYPE_KEY = 'auth-token-type';

export const setAuth = ({
  access_token,
  token_type,
}: {
  access_token: string | null;
  token_type: string | null;
}) => {
  setToken(access_token);
  setTokenType(token_type);
};

const setToken = (token: string | null) => {
  _token = token;
  if (token) {
    localStorage.setItem(LOCAL_HOST_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(LOCAL_HOST_TOKEN_KEY);
  }
};

const setTokenType = (tokenType: string | null) => {
  _tokenType = tokenType;
  if (tokenType) {
    localStorage.setItem(LOCAL_HOST_TOKEN_TYPE_KEY, tokenType);
  } else {
    localStorage.removeItem(LOCAL_HOST_TOKEN_TYPE_KEY);
  }
};

export const getAuthToken = () => {
  if (!_token) {
    _token = localStorage.getItem(LOCAL_HOST_TOKEN_KEY);
  }
  return _token;
};

export const getAuthTokenType = () => {
  if (!_tokenType) {
    _tokenType = localStorage.getItem(LOCAL_HOST_TOKEN_TYPE_KEY);
  }
  return _tokenType;
};

export const getAuthorization = (): string | null => {
  const tokenType = getAuthTokenType();
  const token = getAuthToken();

  if (token && tokenType) return `${tokenType} ${token}`;
  else return null;
};
