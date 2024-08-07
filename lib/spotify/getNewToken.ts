'use server';
import { CLIENT_SECRET, CLIENT_ID } from '@/constants';

const getNewToken = async (refresh_token: string) => {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }).toString(),
  });
  const data = await res.json();
  return data.access_token;
};

export default getNewToken;
