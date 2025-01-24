import { JwtPayload } from "jsonwebtoken";
import { createToken } from "../../utils/createToken";
import { getUserByEmail, getUserByID } from "../../utils/getUser";
import { TChangePassword, TLogin } from "./auth.interface";
import bcrypt from "bcrypt";
import { sendMail } from "../../utils/mail";
import jwt from "jsonwebtoken";
import { User } from "../user/user.model";

// login user
const loginUser = async (payload: TLogin) => {
	// check if user is exist
	const user = await getUserByEmail(payload.email);
	if (!user) {
		throw new Error("User not found");
	}
	// Check user email is verified
	const isVerified = user?.isVerified;

	if (!isVerified) {
		throw new Error("Email is not verified");
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

	// update last login time

	user.lastLogin = new Date();

	await user.save();

	// send response
	return {
		accessToken,
		refreshToken,
	};
};

// change password
const changePassword = async (
	userData: JwtPayload,
	payload: TChangePassword
) => {
	// Check if user exist
	const user = await getUserByID(userData?.userId);

	if (!user) {
		throw new Error("User not found");
	}

	// Check if old password is correct
	const isValidPassword = await bcrypt.compare(
		payload.oldPassword,
		user.password
	);

	if (!isValidPassword) {
		throw new Error("Old password is incorrect");
	}

	// check password is not same as old pass
	const isSamePassword = await bcrypt.compare(
		payload.newPassword,
		user.password
	);

	if (isSamePassword) {
		throw new Error("New password is same as old password");
	}

	// hash password
	const hashPassword = await bcrypt.hash(
		payload.newPassword,
		Number(process.env.SOLT_ROUND)
	);

	// update password and password updated at time

	user.password = hashPassword;
	user.passwordUpdatedAt = new Date();

	await user.save();

	// Send response
	return null;
};

// forgot password
const forgotPassword = async (email: string) => {
	// check if user exist
	const user = await getUserByEmail(email);

	if (!user) {
		throw new Error("User not found");
	}

	// check if user is blocked
	const status = user.status;
	if (status !== "active") {
		throw new Error("User is blocked");
	}

	// generate jwt token
	const jwtPayload = {
		userId: user.id,
		role: user.role,
		email: user.email,
	};

	const resetToken = createToken(
		jwtPayload,
		process.env.JWT_RESET_SECRET as string,
		process.env.JWT_RESET_EXPIRE as string
	);

	// Generate reset link
	const resetLink = `${process.env.CLIENT_URL}/token=${resetToken}`;

	// Send email
	await sendMail.passwordResetMail(user.email, resetLink, user.firstName);
};
// reset password
const resetPassword = async (token: string, newPassword: string) => {
	const decoded = jwt.verify(
		token,
		process.env.JWT_RESET_SECRET as string
	) as JwtPayload;

	// Check if user exist
	const user = await getUserByID(decoded?.userId);

	if (!user) {
		throw new Error("Invalid token");
	}

	// check password is not same as old pass
	const isSamePassword = await bcrypt.compare(newPassword, user.password);

	if (isSamePassword) {
		throw new Error("New password is same as old password");
	}

	// hash password
	const hashPassword = await bcrypt.hash(
		newPassword,
		Number(process.env.SOLT_ROUND)
	);
	// update password and password updated at time
	await User.findByIdAndUpdate(decoded.userId, {
		password: hashPassword,
		passwordUpdatedAt: new Date(),
	});

	// Send password change email
	await sendMail.passwordChangedMail(user.email, user.firstName);

	// Send response
	return null;
};
// refress token

export const authServices = {
	loginUser,
	changePassword,
	forgotPassword,
	resetPassword,
};
