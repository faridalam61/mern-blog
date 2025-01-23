import { createToken } from "../../utils/createToken";
import { getUserByEmail } from "../../utils/getUser";
import { TLogin } from "./auth.interface";
import bcrypt from "bcrypt";

// login user
const loginUser = async (payload: TLogin) => {
	// check if user is exist
	const user = await getUserByEmail(payload.email);
	if (!user) {
		throw new Error("User not found");
	}

	// check if user is blocked
	const status = user?.status;

	if (status !== "active") {
		throw new Error("User is blocked");
	}

	// check if password is correct
	const isValidPassword = await bcrypt.compare(payload.password, user.password);

	if (!isValidPassword) {
		throw new Error("Invalid password");
	}

	// create access token
	const jwtPayload = {
		userId: user.id,
		role: user.role,
	};

	const accessToken = createToken(
		jwtPayload,
		process.env.JWT_ACCESS_SECRET as string,
		process.env.JWT_ACCESS_EXPIRE as string
	);

	// create refresh token
	const refreshToken = createToken(
		jwtPayload,
		process.env.JWT_REFRESH_SECRET as string,
		process.env.JWT_REFRESH_EXPIRE as string
	);

	// send response
	return {
		accessToken,
		refreshToken,
	};
};

// change password
// forgot password
// refress token

export const authServices = {
	loginUser,
};
