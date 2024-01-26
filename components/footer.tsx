"use client";
import { signOut, useSession } from "next-auth/react";

const Footer = () => {
	const { data: session } = useSession();
	return (
		<footer className="flex flex-col justify-center items-center w-full h-[20%] bg-[#555]">
			<p className="text-white text-2xl">Made with ❤️</p>
			{session ? <button onClick={() => signOut()}>Sign out</button> : <></>}
		</footer>
	);
};

export default Footer;
