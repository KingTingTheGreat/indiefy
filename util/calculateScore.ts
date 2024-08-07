import { Song } from "@/types";

const calculateScore = (songs: Song[]) => {
	const total = songs.reduce((acc, song) => acc + song.popularity, 0);
	const avgPopularity = total / songs.length;
	return 100 - avgPopularity;
};

export default calculateScore;
