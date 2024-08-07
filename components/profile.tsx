"use client";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ScoreDisplay from "./scoreDisplay";

const Profile = () => {
	const router = useRouter();
	const userContext = useUserContext();
	const user = userContext.state.user;

	useEffect(() => {
		if (!user) {
			router.push("/");
		}
		const fetchProfile = async () => {
			const res = await fetch("/api/profile");
			const data = await res.json();
			userContext.save({
				user: data,
			});
		};
		fetchProfile();
	}, []);

	return (
		<div className="flex flex-col justify-center items-center text-center w-60% m-2 p-4">
			<h1 className="text-6xl p-1 mb-2">Profile</h1>
			<div>
				<img src={user.profileImage} alt="Profile Image" />
			</div>
			<h2 className="text-3xl p-1 m-1">{user.name}</h2>
			<p>{user.email}</p>
			<ScoreDisplay score={user.score} />
		</div>
	);
};

export default Profile;
