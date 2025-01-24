import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { authValidation } from "./auth.validation";
import { authController } from "./auth.controllers";
const router = express.Router();

// api/v1/auth

// login
router.post(
	"/",
	validateRequest(authValidation.authValidationSchema),
	authController.login
);
// change password
// forgot password
router.post(
	"/forgot-password",
	validateRequest(authValidation.forgotPasswordSchema),
	authController.forgotPassword
);

// Reset password
router.post(
	"/reset-password/:token",
	validateRequest(authValidation.resetPasswordSchema),
	authController.resetPassword
);

// refress token

export const authRoutes = router;
