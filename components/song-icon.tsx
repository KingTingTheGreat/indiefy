import { Song, Artist } from "@/types";
import Link from "next/link";

const ArtistDiv = ({ artists }: { artists: Artist[] }) => {
	const artist_names = artists.map((artist) => artist.name).join(", ");
	return (
		<div className="flex flex-col items-center justify-center">
			{/* {artists.map((artist) => (
				<p key={artist.id}>{artist.name}</p>
			))} */}
			{/* <p>Artist: {artist_names}</p> */}
			<p>{artists[0].name}</p>
		</div>
	);
};

const SongIcon = ({ song }: { song: Song }) => {
	return (
		<div className="flex flex-col flex-wrap max-w-30 items-center justify-center">
			<p>Title: {song.name}</p>
			<ArtistDiv artists={song.artists} />
			<p>popularity: {song.popularity}</p>
			<Link href={song.external_urls.spotify} target="_blank" />
		</div>
	);
};

export default SongIcon;
