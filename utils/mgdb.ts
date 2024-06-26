import { MongoClient, Db, Collection } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
	throw new Error("MONGO_URI environment variable is not defined");
}
const DB_NAME = process.env.DB_NAME;
if (!DB_NAME) {
	throw new Error("DB_NAME environment variable is not defined");
}

let client: MongoClient | null = null;
let cachedDb: Db | null = null;

const connect = async() => {
	if (!client) {
		client = new MongoClient(MONGO_URI);
		await client.connect();
	}
	return client.db(DB_NAME);
}

const getCollection = async(collectionName: string): Promise<Collection> => {
	if (!cachedDb) {
		cachedDb = await connect();
	}
	return cachedDb.collection(collectionName);
}

export default getCollection;
