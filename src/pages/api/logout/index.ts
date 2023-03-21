import { deleteCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  deleteCookie('refresh_token', { req, res });
  deleteCookie('access_token', { req, res });
  res.redirect('/');
}
