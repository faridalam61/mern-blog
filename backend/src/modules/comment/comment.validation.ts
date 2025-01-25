import { z } from "zod";

const createCommentValidationSchema = z.object({
	body: z.object({
		content: z.string(),
		authorId: z.string(),
	}),
});

const updateCommentValidationSchema = z.object({
	body: z.object({
		content: z.string().optional(),
		authorId: z.string().optional(),
	}),
});

export const CommentValidators = {
	createCommentValidationSchema,
	updateCommentValidationSchema,
};
