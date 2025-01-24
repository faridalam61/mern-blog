import catchAsync from "../../utils/catchAsync";
import { OK } from "../../utils/httpStatusCode";
import sendResponse from "../../utils/sendResponse";
import { authServices } from "./auth.services";

// login
const login = catchAsync(async (req, res) => {
	const payload = req.body;
	const result = await authServices.loginUser(payload);

	const { refreshToken, accessToken } = result;

	res.cookie("refreshToken", refreshToken, {
		httpOnly: true,
		maxAge: 30 * 24 * 60 * 60 * 1000,
		secure: process.env.NODE_ENV === "production",
	});

	sendResponse(res, {
		statusCode: OK,
		success: true,
		message: "Login Successfull",
		data: { accessToken },
	});
});

// Verify email
const verifyEmail = catchAsync(async (req, res) => {
	const { token } = req.params;

	const result = await authServices.verifyEmail(token);

	sendResponse(res, {
		statusCode: OK,
		success: true,
		message: "Email verification successfull",
		data: result,
	});
});
// change password

// forgot password
const forgotPassword = catchAsync(async (req, res) => {
	const { email } = req.body;

	const result = await authServices.forgotPassword(email);

	sendResponse(res, {
		statusCode: OK,
		success: true,
		message: "An email with reset link has been sent",
		data: result,
	});
});

// Reset password

const resetPassword = catchAsync(async (req, res) => {
	const { token } = req.params;
	const { newPassword } = req.body;

	const result = await authServices.resetPassword(token, newPassword);

	sendResponse(res, {
		statusCode: OK,
		success: true,
		message: "Password changed successfully",
		data: result,
	});
});
// refress token

export const authController = {
	login,
	forgotPassword,
	resetPassword,
	verifyEmail,
};
