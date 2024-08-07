"use server";
import { REDIRECT_URI, CLIENT_ID } from "@/constants";

const getLoginLink = () => {
	const queryParams = new URLSearchParams({
		response_type: "code",
		redirect_uri: REDIRECT_URI,
		client_id: CLIENT_ID,
		scope: "user-top-read user-read-email playlist-read-private",
	});

	return `https://accounts.spotify.com/authorize?${queryParams.toString()}`;
};

export default getLoginLink;
