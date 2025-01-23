import { z } from "zod";

const createUserValidationSchema = z.object({
	body: z.object({
		firstName: z.string().min(1, "First name is required").trim(),
		lastName: z.string().min(1, "First name is required").trim(),
		email: z.string().email("Enter a valid email address"),
		password: z.string().min(6, "Password must be at least 6 charecter long"),
		role: z.enum(["admin", "user"]).default("user"),
		status: z.enum(["active", "blocked"]).default("active"),
		isVerified: z.boolean().default(false),
		lastLogin: z.date().optional(),
		passwordUpdatedAt: z.date().optional(),
	}),
});

const updateUserValidationSchema = z.object({
	body: z.object({
		firstName: z.string().min(1, "First name is required").trim().optional(),
		lastName: z.string().min(1, "First name is required").trim().optional(),
		email: z.string().email("Enter a valid email address").optional(),
		password: z
			.string()
			.min(6, "Password must be at least 6 charecter long")
			.optional(),
		role: z.enum(["admin", "user"]).optional(),
		status: z.enum(["active", "blocked"]).optional(),
		isVerified: z.boolean().optional(),
		lastLogin: z.date().optional(),
		passwordUpdatedAt: z.date().optional(),
	}),
});

export const userValidation = {
	createUserValidationSchema,
	updateUserValidationSchema,
};
