"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { User } from "@/types";
import BarChart from "@/components/bar-chart";

const DistributionWrapper = ({ users }: { users: User[] }) => {
	const { data: session } = useSession();
	// @ts-ignore
	const score = session?.score || 0;

	return (
		<main>
			<div className="w-full flex justify-center">
				<div className="flex flex-col justify-center items-center min-w-[90%] min-h-[60%] bg-[#555] m-4 ">
					<p className="text-xl">Your Score: {score}</p>
					<BarChart score={score} users={users} />
				</div>
			</div>
		</main>
	);
};

export default DistributionWrapper;
