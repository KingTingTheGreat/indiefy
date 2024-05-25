import { Song } from "@/types";
import SongIcon from "./song-icon";

const TopSongs = ({ songs }: { songs: Song[] }) => {
	if (!songs) {
		return <div>loading...</div>;
	}
	return (
		<>
			<div className="w-full flex flex-wrap justify-center">
				{songs.map((song) => (
					<SongIcon key={song.id} song={song} />
				))}
			</div>
		</>
	);
};

export default TopSongs;
