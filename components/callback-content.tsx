"use client";
import { useSearchParams, redirect } from "next/navigation";

const CallbackContent = () => {
	const searchParams = useSearchParams();
	const code = searchParams.get("code");

	if (code) {
		localStorage.setItem("indiefy-token", code);
		redirect("/profile");
	}

	redirect("/");
};

export default CallbackContent;
