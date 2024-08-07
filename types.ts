import { Collection } from 'mongodb';

export type CollectionCache = {
  [name: string]: Collection;
};

export type User = {
  name?: string;
  email?: string;
  username?: string;
  score?: number;
  profileImage?: string;
};

export type Artist = {
  href: string;
  name: string;
};

export type Album = {
  artists: Artist[];
  href: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  release_date: string;
};

export type Song = {
  album: Album;
  artists: Artist[];
  href: string;
  name: string;
  popularity: number;
};
