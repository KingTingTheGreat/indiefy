"use client";
import { Chart } from "react-google-charts";
import { User, DataArray } from "@/types";

const maxScore = 100;
const title = ["Score", "Number of Users", { role: "style" }];

const BarChart = ({ score, users }: { score: number; users: User[] }) => {
	let data: DataArray[] = [];
	for (let i = 0; i <= maxScore; i++) {
		if (i === score) data.push([i, 0, "#FF0000"]);
		else data.push([i, 0, "#78CB5F"]);
	}

	users.forEach((user) => {
		if (user.score) {
			data[Math.floor(user.score)][1]++;
		}
	});

	return (
		<Chart
			chartType="ColumnChart"
			data={[title, ...data]}
			width="100%"
			height="400px"
			options={{
				// title: "Distribution of User Scores",
				bar: { groupWidth: "100%" },
				legend: { position: "none" },
				chartArea: { width: "80%", height: "80%" },
				backgroundColor: "#444777",
				vAxis: {
					// title: "Number of Users",
					gridlines: {
						count: 0, // hide vertical grid lines
						color: "transparent", // hide vertical grid lines
					},
				},
				hAxis: {
					// title: "Score",
					gridlines: {
						count: 0, // hide vertical grid lines
						color: "transparent", // hide horizontal grid lines
					},
				},
			}}
			// legendToggle
		/>
	);
};

export default BarChart;
