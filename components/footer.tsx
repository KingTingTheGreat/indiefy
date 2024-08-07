"use client";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/userContext";
import { useEffect } from "react";
import { SUCCESS_MESSAGE } from "@/constants";

const Footer = () => {
	const router = useRouter();
	const userContext = useUserContext();
	const { sessionId, loggedIn } = userContext.state;

	useEffect(() => {
		const verify = async () => {
			const res = await fetch("/api/verify");
			const data = await res.json();
			if (data.message === SUCCESS_MESSAGE) {
				userContext.set({ loggedIn: true });
			} else {
				userContext.save({ loggedIn: false, sessionId: "", user: {} });
			}
		};
		verify();
	}, [sessionId]);

	return (
		<footer className="flex flex-col justify-center items-center w-full h-[20%] bg-[#555]">
			<p className="text-white text-2xl">Made with ❤️</p>
			{loggedIn ? (
				<button
					onClick={() => {
						localStorage.removeItem("indiefy-token");
						router.push("/");
					}}>
					Sign out
				</button>
			) : (
				<></>
			)}
		</footer>
	);
};

export default Footer;
