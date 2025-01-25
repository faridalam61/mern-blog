import express from 'express'
import { CommentControllers } from './comment.controllers'
import validateRequest from '../../middlewares/validateRequest'
import { CommentValidators } from './comment.validation'

const router = express.Router()

 router.post("/", validateRequest(CommentValidators.createCommentValidationSchema),CommentControllers.createComment )

router.patch("/:id", validateRequest(CommentValidators.updateCommentValidationSchema), CommentControllers.updateComment)

router.delete("/:id", CommentControllers.deleteComment)

 router.get("/:id", CommentControllers.getSingleComment)

 router.get("/", CommentControllers.getAllComments)

export const CommentRoutes = router;