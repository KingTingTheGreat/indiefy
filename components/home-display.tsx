"use client";
import { useEffect, useState } from "react";
import TopSongs from "./top-songs";
import LoginButton from "./login-button";
import { useSession } from "next-auth/react";
import { Song } from "@/types";
import calculateScore from "@/utils/calculate-score";

const HomeDisplay = () => {
	const [songs, setSongs] = useState<Song[]>([]);
	const { data: session, update } = useSession();
	// @ts-ignore
	const [userScore, setUserScore] = useState<number>(session?.user.score ?? 0);
	const [username, setUsername] = useState<string>("");

	useEffect(() => {
		const fetchSongs = async () => {
			// @ts-ignore
			const token = await session?.user.accessToken;
			if (token) {
				fetch("/api/tracks", {
					headers: {
						AccessToken: token,
					},
				})
					.then((res) => res.json())
					.then((data) => setSongs(data.items));
			}
		};
		fetchSongs();
		if (songs) {
			setUserScore(calculateScore(songs));
			// @ts-ignore
			if (userScore !== (session?.user.score ?? 0)) {
				update({ user: { score: userScore } });
			}
		}
		// @ts-ignore
		setUsername(session?.user.name ?? "");
	}, [session]);

	return (
		<main className="flex flex-col min-h-screen w-full flex-wrap items-center justify-between p-24">
			{songs && songs.length > 0 ? <TopSongs songs={songs} /> : <LoginButton />}
		</main>
	);
};

export default HomeDisplay;
