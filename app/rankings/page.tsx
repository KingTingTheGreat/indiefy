import Leaderboard from "@/components/leaderboard";
import getAllUsers from "@/utils/getAllUsers";
import cleanUsers from "@/utils/clean-users";

export default async function Rankings() {
	try {
		const users = await getAllUsers();
		return <Leaderboard users={cleanUsers(users)} />;
	} catch (error) {
		console.error(error);
		console.log("Failed to load rankings");
		return <div>Failed to load rankings</div>;
	}
}
