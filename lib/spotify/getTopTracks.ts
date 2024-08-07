"use server";
import { Song } from "@/types";

const getTopTracks = async (token: string): Promise<Song[] | undefined> => {
	const res = await fetch("https://api.spotify.com/v1/me/top/tracks", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	if (!res.ok) {
		console.error(res.statusText);
		return undefined;
	}
	const data = await res.json();
	return data.items;
};

export default getTopTracks;
