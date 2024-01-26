import { Song } from "@/types";

const calculateScore = (songs: Song[]) => {
	const score = songs.reduce((acc, song) => {
		return acc + song.popularity;
	}, 0);

	return Math.floor(score / songs.length);
};

export default calculateScore;
