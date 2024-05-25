"use client";
import { useSearchParams, redirect } from "next/navigation";
import { useEffect, useState } from "react";

const CallbackContent = () => {
	// const [redirectHome, setRedirectHome] = useState(false);

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
};

export default CallbackContent;
