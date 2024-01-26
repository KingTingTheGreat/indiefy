import DistributionWrapper from "@/components/distribution-wrapper";
import getAllUsers from "@/utils/getAllUsers";
import stripUsers from "@/utils/strippUsers";

export default async function Distribution() {
	try {
		const users = await getAllUsers();
		return <DistributionWrapper users={stripUsers(users)} />;
	} catch (error) {
		console.error(error);
		console.log("Failed to load user data");
		return <div>Failed to load user data</div>;
	}
}
