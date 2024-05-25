import { type NextRequest } from "next/server";
import { setStore } from "@/store";

const redirect_uri = process.env.PROD === "true" ? "https://indiefy.org/callback" : "http://localhost:3000/callback";

export async function GET(request: NextRequest) {
	console.log("callback-token");
	const token = request.nextUrl.searchParams.get("token");

	if (!token) {
		return new Response(JSON.stringify("No token provided."), {
			status: 403,
		});
	}

	fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		body: new URLSearchParams({
			grant_type: "authorization_code",
			code: token,
			redirect_uri: redirect_uri,
			client_id: process.env.SPOTIFY_CLIENT_ID as string,
			client_secret: process.env.SPOTIFY_CLIENT_SECRET as string,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			const user = {
				accessToken: data["access_token"],
				refreshToken: data["refresh_token"],
				score: 0,
			};
			setStore(token, user);
			console.log("set user in store");
			// console.log(user);
		});

	return new Response(JSON.stringify("Token received."), {
		status: 200,
	});
}
