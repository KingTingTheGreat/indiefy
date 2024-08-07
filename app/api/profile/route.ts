import { COOKIE_NAME, USERS_COLLECTION } from '@/constants';
import getCollection from '@/db';
import getNewToken from '@/lib/spotify/getNewToken';
import getTopTracks from '@/lib/spotify/getTopTracks';
import { Song } from '@/types';
import calculateScore from '@/util/calculateScore';
import displayScore from '@/util/displayScore';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get(COOKIE_NAME);
  if (!cookie) {
    console.log('No cookie found');
    return new Response('No cookie found', { status: 400 });
  }

  const { sessionId } = JSON.parse(cookie.value);
  if (!sessionId) {
    console.log('No session found');
    return new Response('No session found', { status: 400 });
  }

  const userCollection = await getCollection(USERS_COLLECTION);
  const userDocument = await userCollection.findOne({ sessionId });
  if (!userDocument) {
    console.log('No user found');
    return new Response('No user found', { status: 400 });
  }

  const { access_token, refresh_token } = userDocument;

  // get top songs
  let topSongs = await getTopTracks(access_token);
  let newAccessToken;
  if (!topSongs) {
    newAccessToken = await getNewToken(refresh_token);
    if (!newAccessToken) {
      return new Response('Failed to refresh token', { status: 500 });
    }
    topSongs = await getTopTracks(newAccessToken);
    if (!topSongs) {
      return new Response('Failed to get top songs', { status: 500 });
    }
  }

  const score = calculateScore(topSongs);
  console.log('score', score);

  // update
  const dbRes = await userCollection.updateOne(
    { sessionId },
    { $set: { score } }
  );
  if (!dbRes) {
    return new Response('Failed to update score', { status: 500 });
  }

  return NextResponse.json({
    name: userDocument.name,
    profileImage: userDocument.profileImage,
    score: displayScore(score),
  });
}
