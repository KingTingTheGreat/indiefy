import { type NextRequest } from "next/server";
import { getStore, setStore } from "@/store";
import calculateScore from "@/utils/calculate-score";

export const dynamic = "force-dynamic"; // defaults to auto

const url = `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term`;

export async function GET(request: NextRequest) {
	try {
		const token = request.nextUrl.searchParams.get("token");

		if (!token) {
			return new Response(JSON.stringify("No token provided."), {
				status: 403,
			});
		}

		let user = getStore(token);

		if (!user) {
			console.log("fetching token");
			fetch("https://accounts.spotify.com/api/token", {
				method: "POST",
				body: new URLSearchParams({
					grant_type: "authorization_code",
					code: token,
					redirect_uri: "https://indiefy.org/profile",
					client_id: process.env.SPOTIFY_CLIENT_ID as string,
					client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					user = {
						accessToken: data["access_token"],
						refreshToken: data["refresh_token"],
						score: 0,
					};
					setStore(token, user);
					// console.log(user);
				});
		}

		// console.log("access token");
		// console.log(user?.accessToken);
		console.log("fetching songs");
		const response = await fetch(url, {
			headers: {
				Authorization: `Bearer ${user?.accessToken}`,
			},
		});

		const data = await response.json();
		const score = calculateScore(data.items);

		if (user) {
			user.score = score;
			setStore(token, user);
		}

		return new Response(JSON.stringify({ songs: data.items, score: score }), {
			status: 200,
		});
	} catch (error) {
		return new Response(JSON.stringify("Something went wrong."), {
			status: 500,
		});
	}
}
