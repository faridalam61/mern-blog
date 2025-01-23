import { User } from "../modules/user/user.model";

export const getUserByEmail = async (email: string) => {
	try {
		const user = await User.findOne({ email }).select("+password");
		return user;
	} catch {
		return null;
	}
};

export const getUserByID = async (id: string) => {
	try {
		const user = await User.findById(id).select("+password");
		return user;
	} catch {
		return null;
	}
};
