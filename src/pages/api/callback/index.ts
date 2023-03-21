import { NextApiRequest, NextApiResponse } from 'next';
import qs from 'querystring';
import { postAccessToken } from 'api/token';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = typeof req.query.code === 'string' ? req.query.code : null;
  const state = typeof req.query.state === 'string' ? req.query.state : null;

  if (state === null || code === null) {
    res.redirect(
      '/#' +
        qs.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    postAccessToken(code)
      .then((response) => {
        res.setHeader('Set-Cookie', [
          `access_token=${response.data.access_token}; path=/; max-age=${response.data.expires_in}`,
          `refresh_token=${response.data.refresh_token}; path=/; max-age=${response.data.expires_in}; HttpOnly`,
        ]);

        res.redirect('/');
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}
