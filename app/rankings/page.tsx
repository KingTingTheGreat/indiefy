import { Leaderboard } from "@/components/leaderboard";
import { DBUser } from "@/types";
import { usersDBConnect } from "@/utils/connection";

const processUsers = (users: { _doc: DBUser }[]) => {
	return users.map((user) => {
		return {
			username: user._doc.username,
			score: Number(user._doc.score),
		};
	});
};

export default async function Rankings() {
	try {
		const db = await usersDBConnect();
		const allUsers = await db.Users.find({});

		const users = processUsers(allUsers);

		return <Leaderboard users={users} />;
	} catch (error) {
		console.error(error);
		console.log("Failed to load rankings");
		return <div>Failed to load rankings</div>;
	}
}
