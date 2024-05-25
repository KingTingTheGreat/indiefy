import { CleanUser } from "@/types";
import { WithId, Document } from "mongodb";

const cleanUsers = (users: WithId<Document>[]): CleanUser[] => {
	return users.map((user) => {
		return {
			username: user.username,
			score: Number(user.score),
		};
	});
};

export default cleanUsers;
