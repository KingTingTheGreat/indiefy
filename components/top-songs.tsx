import { Song } from "@/types";
import ScoreBar from "./score-bar";
import SongIcon from "./song-icon";

const TopSongs = ({ songs }: { songs: Song[] }) => {
	return (
		<>
			<ScoreBar />
			{songs.map((song) => (
				<SongIcon key={song.id} song={song} />
			))}
		</>
	);
};

export default TopSongs;
