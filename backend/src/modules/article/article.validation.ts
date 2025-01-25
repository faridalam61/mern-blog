import z from 'zod'
const createArticleValidationSchema = z.object({
    body: z.object({
        title: z.string(),
	    content:z.string(),
	    authorId: z.string(),
	    categories:z.string().array() ,
	    tags: z.string().array(),
	    status: z.enum(["published","draft"]).default("published"),
    })
})

const updateArticleValidationSchema = z.object({
    body: z.object({
        title: z.string().optional(),
	    content:z.string().optional(),
	    authorId: z.string().optional(),
	    categories:z.string().array().optional() ,
	    tags: z.string().array().optional(),
	    status: z.enum(["published","draft"]).optional(),
    })
})


export const articleValidators = {createArticleValidationSchema, updateArticleValidationSchema}