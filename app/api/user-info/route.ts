import { type NextRequest } from "next/server";
import { getStore, setStore } from "@/store";
import calculateScore from "@/utils/calculate-score";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // defaults to auto

const url = `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term`;

export async function GET(request: NextRequest) {
	console.log("user-info");
	try {
		const token = request.nextUrl.searchParams.get("token");

		if (!token) {
			return new Response(JSON.stringify("No token provided."), {
				status: 403,
			});
		}

		let user = getStore(token);
		console.log("got user from store");

		if (!user) {
			console.log("no user found in store");
			return new Response(JSON.stringify("User not found."), {
				status: 404,
			});
		}

		// console.log("access token");
		// console.log(user?.accessToken);
		console.log("fetching songs");
		console.log(user.accessToken);
		const response = await fetch(url, {
			headers: {
				Authorization: `Bearer ${user.accessToken}`,
			},
		});

		const data = await response.json();
		const score = calculateScore(data.items);
		console.log(score);
		console.log(data);

		if (user) {
			user.score = score;
			setStore(token, user);
		}

		return new Response(JSON.stringify({ songs: data.items, score: score }), {
			status: 200,
		});
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify("Something went wrong."), {
			status: 500,
		});
	}
}
