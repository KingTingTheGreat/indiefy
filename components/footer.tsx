"use client";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Footer = () => {
	const router = useRouter();
	return (
		<footer className="flex flex-col justify-center items-center w-full h-[20%] bg-[#555]">
			<p className="text-white text-2xl">Made with ❤️</p>
			{true ? (
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
