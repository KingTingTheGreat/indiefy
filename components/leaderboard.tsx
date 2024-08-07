import { User } from "@/types";
import displayScore from "@/util/displayScore";

const TableHeader = ({ children }: { children: React.ReactNode }) => (
	<th className="p-2 m-1 text-lg text-[#78CB5F] border-solid border-2 border-[#999999]">{children}</th>
);

const TableContent = ({ children, color }: { children: React.ReactNode; color?: string }) => (
	<td style={{ color }} className="p-1 text-lg text-center">
		{children}
	</td>
);

const LeaderboardRow = ({ rank, username, score }: { rank: number; username: string; score: number }) => {
	return (
		<tr>
			<TableContent color={rank === 1 ? "#d4af37" : rank === 2 ? "#c0c0c0" : rank === 3 ? "#cd7f32" : ""}>
				{rank}
			</TableContent>
			<TableContent>{username}</TableContent>
			<TableContent>{score}</TableContent>
		</tr>
	);
};

const Leaderboard = ({ users }: { users: User[] }) => {
	return (
		<div className="flex flex-col items-center p-1 m-2">
			<h2 className="text-4xl p-2 m-1">Leaderboard</h2>
			<table className="table-auto m-1">
				<thead>
					<tr>
						<TableHeader>Rank</TableHeader>
						<TableHeader>Username</TableHeader>
						<TableHeader>Score</TableHeader>
					</tr>
				</thead>
				<tbody>
					{users.map((user, i) => (
						<LeaderboardRow
							key={i}
							rank={i + 1}
							username={user.name ?? "[USERNAME NOT FOUND]"}
							score={user.score !== undefined ? displayScore(user.score) : 0}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Leaderboard;
