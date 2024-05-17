import getCollection from "./mgdb";

const DB_COLLECTION = process.env.DB_COLLECTION;

const getAllUsers = async () => {
	const usersCollection = await getCollection(DB_COLLECTION as string);
	const users = await usersCollection.find({}).toArray();
	return users;
};

export default getAllUsers;
