import { TUser } from "./user.interface";
import { User } from "./user.model";

// Create user
const createUserIntoDB = async (payload: TUser) => {
	const result = await User.create(payload);
	return result;
};

// get user by id
const getUserByIdFromDB = async (id: string) => {
	const result = await User.findById(id);
	return result;
};

// get all users
const getAllUsersFromDB = async () => {
	const result = await User.find();
	return result;
};

// update user
const updateUserIntoDB = async (id: string, payload: Partial<TUser>) => {
	const result = await User.findByIdAndUpdate(id, payload, { new: true });
	return result;
};

// delete user

const deleteUserFromDB = async (id: string) => {
	const result = await User.findByIdAndDelete(id);
	return result;
};

export const userServices = {
	createUserIntoDB,
	getUserByIdFromDB,
	getAllUsersFromDB,
	updateUserIntoDB,
	deleteUserFromDB,
};
