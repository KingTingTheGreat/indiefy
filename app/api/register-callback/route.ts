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

  console.log('getting access_token from spotify');
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

  console.log('reading access_token json');
  const data = await accessRes.json();
  console.log(data);

  const { access_token, refresh_token } = data;

  console.log('getting user profile from spotify');
  const profileRes = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (!profileRes.ok) {
    console.log('Error', profileRes);
    return new Response('Error', { status: 500 });
  }

  console.log('reading profile data json');
  const profileData = await profileRes.json();
  console.log(profileData);
  const { display_name, email } = profileData;
  const profileImage = profileData.images[1].url;

  if (!email || !display_name) {
    console.log('Error', profileData);
    return new Response('Error', { status: 500 });
  }

  console.log('awaiting user collection');
  const userCollection = await getCollection(USERS_COLLECTION);
  console.log('generating sessionId');
  const sessionId = generateSessionId(userCollection);

  console.log('creating db user');
  const user = {
    sessionId,
    email,
    name: display_name,
    profileImage,
    access_token,
    refresh_token,
  };

  console.log('inserting/updating user');
  const dbRes = await userCollection.updateOne(
    { email },
    { $set: user },
    { upsert: true }
  );
  if (!dbRes) {
    console.log('Error', dbRes);
    return new Response('Error', { status: 500 });
  }

  console.log('returning');
  return NextResponse.json({ sessionId, name: display_name, profileImage });
}
