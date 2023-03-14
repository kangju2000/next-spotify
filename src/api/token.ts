import axios from 'axios';
import { BASE_URL } from 'constants/path';

interface TokenObject {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface AuthorizationTokenResponse extends TokenObject {}

interface AccessTokenResponse extends TokenObject {
  refresh_token: string;
  scope: string;
}
interface RefreshTokenResponse extends TokenObject {
  scope: string;
}

export const postAuthorizationToken = () => {
  return axios<AuthorizationTokenResponse>({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
        ).toString('base64'),
    },
    data: {
      grant_type: 'client_credentials',
    },
  });
};

export const postAccessToken = (code: string) => {
  return axios<AccessTokenResponse>({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
        ).toString('base64'),
    },
    data: {
      code: code,
      redirect_uri: BASE_URL + '/api/callback',
      grant_type: 'authorization_code',
    },
  });
};

export const postRefreshToken = (refresh_token: string) => {
  return axios<RefreshTokenResponse>({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
        ).toString('base64'),
    },
    data: {
      grant_type: 'refresh_token',
      refresh_token,
    },
  });
};
