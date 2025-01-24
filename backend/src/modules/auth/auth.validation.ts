import { z } from "zod";

const authValidationSchema = z.object({
	body: z.object({
		email: z.string().email(),
		password: z.string(),
	}),
});

const forgotPasswordSchema = z.object({
	body: z.object({
		email: z.string().email(),
	}),
});

const resetPasswordSchema = z.object({
	body: z.object({
		newPassword: z.string(),
	}),
});

export const authValidation = {
	authValidationSchema,
	forgotPasswordSchema,
	resetPasswordSchema,
};
