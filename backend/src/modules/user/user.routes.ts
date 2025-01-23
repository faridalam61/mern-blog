import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import { userController } from "./user.controllers";
const router = express.Router();

//api end point 'api/v1/user'

// Create user
router.post(
	"/",
	validateRequest(userValidation.createUserValidationSchema),
	userController.createUser
);

// get user by id
router.get("/:userId", userController.getSingleUser);

// get all users
router.get("/", userController.getAllUser);

// update user
router.patch("/:userId", userController.updateUser);

// delete user
router.delete("/:userId", userController.deleteUser);

export const userRouter = router;
