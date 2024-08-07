import {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  USERS_COLLECTION,
} from '@/constants';
import getCollection from '@/db';
import { generateSessionId } from '@/util/generateSessionId';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code');

  if (!code) {
    console.log('No code provided.');
    return new Response('No code provided.', { status: 400 });
  }

  const accessRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });
  if (!accessRes.ok) {
    console.log('Error', accessRes);
    return new Response('Error', { status: 500 });
  }

  const data = await accessRes.json();
  console.log(data);

  const { access_token, refresh_token } = data;

  const profileRes = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (!profileRes.ok) {
    console.log('Error', profileRes);
    return new Response('Error', { status: 500 });
  }

  const profileData = await profileRes.json();
  console.log(profileData);
  const { display_name, email } = profileData;
  const profileImage = profileData.images[1].url;

  if (!email || !display_name) {
    console.log('Error', profileData);
    return new Response('Error', { status: 500 });
  }

  const sessionId = generateSessionId();

  const user = {
    sessionId,
    email,
    name: display_name,
    profileImage,
    access_token,
    refresh_token,
  };

  const userCollection = await getCollection(USERS_COLLECTION);
  const dbRes = await userCollection.updateOne(
    { email },
    { $set: user },
    { upsert: true }
  );
  if (!dbRes) {
    console.log('Error', dbRes);
    return new Response('Error', { status: 500 });
  }

  return NextResponse.json({ sessionId, name: display_name, profileImage });
}
