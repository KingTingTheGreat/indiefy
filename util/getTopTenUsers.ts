"use server";
import { USERS_COLLECTION } from "@/constants";
import getCollection from "@/db";
import { User } from "@/types";

const getTopTenUsers = async (): Promise<User[]> => {
	const userCollection = await getCollection(USERS_COLLECTION);
	const users = await userCollection.find().sort({ score: -1 }).limit(10).toArray();
	console.log(users);
	return users.map((user) => ({
		name: user.name,
		profileImage: user.profileImage,
		score: user.score,
	}));
};

export default getTopTenUsers;