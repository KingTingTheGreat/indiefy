import { Song, Artist, Album } from "@/types";
import Link from "next/link";
import Image from "next/image";

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
		<div className="flex flex-col items-center justify-center relative">
			<Image src={album.images[0].url} alt="album cover" width={200} height={200} className="m-1" />
		</div>
	);
};

const SongIcon = ({ song }: { song: Song }) => {
	return (
		<div className="flex flex-col flex-wrap w-60 text-center items-center justify-center bg-[#222] p-1 m-2">
			{albumCover({ album: song.album })}
			<h4>{song.name}</h4>
			<ArtistDiv artists={song.artists} />
			<p>popularity: {song.popularity}</p>
			<Link href={song.external_urls.spotify} target="_blank" />
		</div>
	);
};

export default SongIcon;
