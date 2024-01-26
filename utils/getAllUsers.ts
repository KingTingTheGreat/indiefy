import { usersDBConnect } from "./connection";

const getAllUsers = async () => {
	const db = await usersDBConnect();
	const users = await db.Users.find({});
	return users;
};

export default getAllUsers;
