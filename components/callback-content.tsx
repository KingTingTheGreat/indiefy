"use client";
import { useSearchParams, redirect } from "next/navigation";
import { useEffect } from "react";

const CallbackContent = () => {
	const searchParams = useSearchParams();
	const code = searchParams.get("code");

	useEffect(() => {
		if (code) {
			localStorage.setItem("indiefy-token", code);
			fetch(`/api/callback-token?token=${code}`);
			redirect("/profile");
		}

		redirect("/");
	}, [code]);

	return <div>loading...</div>;
};

export default CallbackContent;
