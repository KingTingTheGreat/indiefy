import { User } from "@/types";

const TableHeader = ({ text }: { text: any }) => (
	<th className="p-2 m-1 text-lg text-[#78CB5F] border-solid border-2 border-[#999999]">{text}</th>
);

const TableContent = ({ text, color }: { text: any; color: string }) => (
	<td style={{ color }} className="p-1 text-lg text-center">
		{text}
	</td>
);

const LeaderboardRow = ({ rank, username, score }: { rank: number; username: string; score: number }) => {
	const color = rank === 1 ? "#d4af37" : rank === 2 ? "#c0c0c0" : rank === 3 ? "#cd7f32" : "";

	return (
		<tr>
			<TableContent text={rank} color={color} />
			<TableContent text={username} color={""} />
			<TableContent text={score} color={""} />
		</tr>
	);
};

// display the top 10 users with the most points and their scores
const Leaderboard = ({ users }: { users: User[] }) => {
	// const [users, setUsers] = useState([]);

	const topUsers = users
		.filter((a) => a.score !== undefined)
		.sort((a, b) => (a.score !== undefined && b.score !== undefined ? b.score - a.score : 0)) // score should always be valid because of filter but i was getting annotation errors
		.slice(0, 10);

	return (
		<div className="flex flex-col items-center">
			<h2 className="text-4xl p-2 m-1">Leaderboard</h2>
			<table className="table-auto">
				<thead>
					<tr>
						<TableHeader text="Rank" />
						<TableHeader text="Username" />
						<TableHeader text="Score" />
					</tr>
				</thead>
				<tbody>
					{topUsers.map((user, i) => (
						<LeaderboardRow
							key={i}
							rank={i + 1}
							username={user.username ?? "[USERNAME NOT FOUND]"}
							score={user.score ?? 50}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Leaderboard;
