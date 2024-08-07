"use client";
import getLoginLink from "@/lib/spotify/getLoginLink";
import Link from "next/link";
import { useState, useEffect } from "react";

const LoginButton = () => {
	const [loginLink, setLoginLink] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const link = await getLoginLink();
			setLoginLink(link);
		};
		fetchData();
	}, []);

	return (
		<>
			{loginLink ? (
				<Link className="m-4 px-5 py-2 w-fit text-2xl rounded-2xl bg-customGreen" href={loginLink}>
					Login with Spotify
				</Link>
			) : (
				<Link className="m-4 px-5 py-2 w-fit text-2xl rounded-2xl bg-customGreen" href={"/"}>
					Login with Spotify
				</Link>
			)}
		</>
	);
};

export default LoginButton;
