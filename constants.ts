export const ENV = process.env.ENV as string;
export const REDIRECT_URI =
  ENV !== 'dev'
    ? 'https://indiefy.org/callback'
    : 'http://localhost:3000/callback';
export const CSRF_TOKEN_LENGTH = 16;
export const SESSION_ID_LENGTH = 64;
export const SUCCESS_MESSAGE = 'success';
export const FAILURE_MESSAGE = 'failure';
export const COOKIE_NAME = 'indiefy-cookie';
export const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID as string;
export const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET as string;
export const MONGO_URI = process.env.MONGO_URI as string;
export const DB_NAME = (process.env.DB_NAME as string) + '-' + ENV;
export const USERS_COLLECTION = process.env.USERS_COLLECTION as string;
