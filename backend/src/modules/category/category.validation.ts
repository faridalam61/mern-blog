import { z } from "zod";

const createCategoryValidationSchema = z.object({
    body: z.object({
        title: z.string(),
        description: z.string().optional()
    })
})

const updateCategoryValidationSchema = z.object({
    body: z.object({
        title: z.string().optional(),
        description: z.string().optional()
    })
})

export const categoryValidators = {
    createCategoryValidationSchema,
    updateCategoryValidationSchema
}