import { DefaultSession } from "next-auth";

export type DBUser = {
	username: string;
	score: string;
};

export type User = {
	name?: string | null;
	email?: string | null;
	username?: string;
	accessToken?: string;
	score?: number;
};

export interface ResponseFuncs {
	GET?: Function;
	POST?: Function;
	PUT?: Function;
	DELETE?: Function;
}

export type DataArray = [number, number, string];

export interface Session extends Omit<DefaultSession, "user"> {
	user?: User;
	expires: string;
	score: number;
}

export type Album = {
	images: {
		url: string;
	}[];
	id: string;
	name: string;
};

export type Artist = {
	name: string;
	id: string;
};

export type Song = {
	album: Album;
	artists: Artist[];
	external_urls: { spotify: string };
	href: string;
	name: string;
	popularity: number;
	id: string;
};

export type SpotifyResponse = {
	items: Song[];
};
