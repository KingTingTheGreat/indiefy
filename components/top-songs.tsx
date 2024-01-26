import { Song } from "@/types";
import ScoreBar from "./score-bar";
import SongIcon from "./song-icon";

const TopSongs = ({ songs }: { songs: Song[] }) => {
	return (
		<>
			<ScoreBar />
			<div className="w-full flex flex-wrap justify-center">
				{songs.map((song) => (
					<SongIcon key={song.id} song={song} />
				))}
			</div>
		</>
	);
};

export default TopSongs;
