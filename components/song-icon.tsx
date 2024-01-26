import { Song, Artist, Album } from "@/types";
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

const albumCover = ({ album }: { album: Album }) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<img src={album.images[0].url} alt="album cover" />
		</div>
	);
};

const SongIcon = ({ song }: { song: Song }) => {
	return (
		<div className="flex flex-col flex-wrap max-w-60 items-center justify-center">
			{albumCover({ album: song.album })}
			<p>Title: {song.name}</p>
			<ArtistDiv artists={song.artists} />
			<p>popularity: {song.popularity}</p>
			<Link href={song.external_urls.spotify} target="_blank" />
		</div>
	);
};

export default SongIcon;
