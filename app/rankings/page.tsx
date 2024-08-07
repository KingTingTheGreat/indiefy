"use client";
import Leaderboard from "@/components/leaderboard";
import { User } from "@/types";
import { useEffect, useState } from "react";
import getTopTenUsers from "@/util/getTopTenUsers";

export default function RankingsPage() {
	const [topTenUsers, setTopTenUsers] = useState<User[] | null>(null);

	useEffect(() => {
		const fetchTopTenUsers = async () => {
			setTopTenUsers(await getTopTenUsers());
		};
		fetchTopTenUsers();
	}, []);

	return topTenUsers ? <Leaderboard users={topTenUsers} /> : <Leaderboard users={[]} />;
}
