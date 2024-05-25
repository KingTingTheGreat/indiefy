import { UserStore, User } from "./types";

export const store: UserStore = {};

export const setStore = (token: string, user: User): undefined => {
	store[token] = user;
};

export const getStore = (token: string): User | null => {
	if (!store[token]) {
		return null;
	}
	return store[token];
};

export const deleteStore = (token: string): undefined => {
	delete store[token];
};
