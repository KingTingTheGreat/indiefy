import { DBUser } from "@/types";

const stripUsers = (users: { _doc: DBUser }[]) => {
	return users.map((user) => {
		return {
			username: user._doc.username,
			score: Number(user._doc.score),
		};
	});
};

export default stripUsers;
