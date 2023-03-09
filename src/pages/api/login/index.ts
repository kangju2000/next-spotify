import type { NextApiRequest, NextApiResponse } from 'next';
import qs from 'querystring';
import { BASE_URL } from 'constants/path';
import generateRandomString from 'utils/generateRandomString';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';

  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      qs.stringify({
        response_type: 'code',
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        scope: scope,
        redirect_uri: `${BASE_URL}/api/callback`,
        state: state,
      })
  );
}
