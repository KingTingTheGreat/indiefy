"use client";
import { useEffect, useState } from "react";
import TopSongs from "@/components/top-songs";
import ScoreBar from "@/components/score-bar";
import { redirect } from "next/navigation";
import { UserInfoResponse, Song } from "@/types";

const Profile = () => {
	const [songs, setSongs] = useState<Song[]>([]);
	const [score, setScore] = useState<number>(0);

	useEffect(() => {
		const token = localStorage.getItem("indiefy-token");
		if (token && token !== "undefined") {
			fetch(`/api/user-info?token=${token}`)
				.then((res) => res.json())
				.then((data: UserInfoResponse) => {
					// setToken(data.token);
					// localStorage.setItem("indiefy-token", data.token);
					console.log("logging fetched data");
					console.log(data);
					setSongs(data.songs);
					setScore(data.score);
				});
			localStorage.setItem("indiefy-token", token);
		} else {
			console.log("no token");
			redirect("/");
		}
	}, []);

	return (
		<div className="flex flex-col items-center">
			<p>your profile</p>
			<ScoreBar score={score} />
			<TopSongs songs={songs} />
		</div>
	);
};

export default Profile;
