import Link from "next/link";

const redirect_uri = process.env.PROD === "true" ? "https://indiefy.org/callback" : "http://localhost:3000/callback";

const LoginButton = () => {
	return (
		<Link
			className="m-4 px-5 py-2 w-fit text-2xl rounded-2xl bg-customGreen"
			href={`https://accounts.spotify.com/authorize?response_type=code&client_id=1b1f629c114e4caba95204375a1db469&redirect_uri=${redirect_uri}&scope=user-top-read`}>
			Login with Spotify
		</Link>
	);
};

export default LoginButton;
