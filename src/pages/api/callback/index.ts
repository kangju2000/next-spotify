import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import qs from 'querystring';
import { BASE_URL } from 'constants/path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect(
      '/#' +
        qs.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(
            process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_CLIENT_SECRET
          ).toString('base64'),
      },
      data: qs.stringify({
        code: code,
        redirect_uri: BASE_URL + '/api/callback',
        grant_type: 'authorization_code',
      }),
    })
      .then((response) => {
        res.setHeader('Set-Cookie', [
          `access_token=${response.data.access_token}; path=/; max-age=${response.data.expires_in}`,
          `refresh_token=${response.data.refresh_token}; path=/; max-age=${response.data.expires_in}`,
        ]);
        
        res.redirect('/');
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}
