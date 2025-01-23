import catchAsync from "../../utils/catchAsync";
import { OK } from "../../utils/httpStatusCode";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.services";

// Create user
const createUser = catchAsync(async (req, res) => {
	const payload = req.body;
	const result = await userServices.createUserIntoDB(payload);

	sendResponse(res, {
		statusCode: OK,
		success: true,
		message: "User created successfully!",
		data: result,
	});
});

// get user by id
const getSingleUser = catchAsync(async (req, res) => {
	const userId = req.params.userId;
	const result = await userServices.getUserByIdFromDB(userId);

	sendResponse(res, {
		statusCode: OK,
		success: true,
		message: "User retrived successfully!",
		data: result,
	});
});

// get all users
const getAllUser = catchAsync(async (req, res) => {
	const result = await userServices.getAllUsersFromDB();

	sendResponse(res, {
		statusCode: OK,
		success: true,
		message: "Users retrived successfully!",
		data: result,
	});
});

// update user
const updateUser = catchAsync(async (req, res) => {
	const payload = req.body;
	const userId = req.params.userId;
	const result = await userServices.updateUserIntoDB(userId, payload);

	sendResponse(res, {
		statusCode: OK,
		success: true,
		message: "User updated successfully!",
		data: result,
	});
});

// delete user

const deleteUser = catchAsync(async (req, res) => {
	const userId = req.params.userId;
	const result = await userServices.deleteUserFromDB(userId);

	sendResponse(res, {
		statusCode: OK,
		success: true,
		message: "User deleted successfully!",
		data: result,
	});
});

export const userController = {
	createUser,
	getAllUser,
	getSingleUser,
	updateUser,
	deleteUser,
};
