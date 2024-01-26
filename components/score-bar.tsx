"use client";
import { useSession } from "next-auth/react";

const ScoreBar = () => {
	const { data: session } = useSession();
	// @ts-ignore
	const score = session?.score || 0;
	return (
		<div className="flex flex-row justify-start items center w-[40%] bg-nullGray">
			<div className="bg-customGreen h-[90%" style={{ width: `${score}%` }}>
				<p>{score}%</p>
			</div>
		</div>
	);
};

export default ScoreBar;
