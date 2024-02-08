"use client";
import { signIn } from "next-auth/react";

const LoginButton = () => {
	return (
		<button className="m-4 px-5 py-2 w-fit text-2xl rounded-2xl bg-customGreen" onClick={() => signIn("spotify")}>
			Login with Spotify
		</button>
	);
};

export default LoginButton;
