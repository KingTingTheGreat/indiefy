"use client";
import { useUserContext } from "@/context/userContext";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const CallbackPage = () => {
	const userContext = useUserContext();
	const searchParams = useSearchParams();
	const code = searchParams.get("code");
	const router = useRouter();

	useEffect(() => {
		const callback = async () => {
			if (code) {
				localStorage.setItem("indiefy-token", code);
				const res = await fetch(`/api/register-callback?code=${code}`);
				console.log(res);
				const data = await res.json();
				const { sessionId, name, profileImage } = data;
				userContext.save({
					sessionId,
					user: {
						name,
						profileImage,
					},
				});

				router.push("/profile");
			} else {
				throw new Error("No code provided.");
			}
		};

		try {
			callback();
		} catch (error) {
			console.error(error);
			router.push("/");
		}
	}, [code]);

	return <div>loading...</div>;
};

export default CallbackPage;
