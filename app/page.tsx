"use client";
import { useEffect, useState } from "react";
import LoginButton from "@/components/login-button";
import { redirect } from "next/navigation";

const Home = () => {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		setToken(localStorage.getItem("indiefy-token"));
	}, []);

	if (token && token !== "undefined") {
		redirect("/profile");
	}

	return (
		<main className="w-full">
			<div className="flex flex-col w-full items-center justify-between">
				<h2 className="m-5 text-6xl text-center">Find your rank</h2>
				<div className="flex flex-col min-h-screen w-full flex-wrap items-center justify-between p-24">
					<LoginButton />
				</div>{" "}
			</div>
		</main>
	);
};

export default Home;
