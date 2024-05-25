import { Song } from "@/types";

const calculateScore = (songs: Song[]) => {
	if (!songs) {
		return 0;
	}
	const score = songs.reduce((acc, song) => {
		return acc + song.popularity;
	}, 0);

	return 100 - Math.floor(score / songs.length);
};

export default calculateScore;
