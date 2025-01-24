import { createToken } from "../../utils/createToken";
import { sendMail } from "../../utils/mail";
import { TUser } from "./user.interface";
import { User } from "./user.model";

// Create user
const createUserIntoDB = async (payload: TUser) => {
	const result = await User.create(payload);

	const jwtPayload = {
		userId: result.id,
		role: result.role,
		email: result.email,
	};

	const verificationToken = createToken(
		jwtPayload,
		process.env.JWT_VERIFICATION_TOKEN_SECRET as string,
		process.env.JWT_VERIFICATION_TOKEN_EXPIRE as string
	);
	console.log("verificationLink", process.env.JWT_VERIFICATION_TOKEN_SECRET);
	const verificationLink = `${process.env.CLIENT_URL}/${verificationToken}`;

	await sendMail.verificationMail(
		result.email,
		verificationLink,
		result.firstName
	);
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
