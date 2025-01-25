import express from "express";
import { ArticleControllers } from "./article.controllers";
import validateRequest from "../../middlewares/validateRequest";
import { articleValidators } from "./article.validation";
const router = express.Router();

// api/v1/article
// create article
router.post(
	"/",
	validateRequest(articleValidators.createArticleValidationSchema),
	ArticleControllers.createArticle
);

// update article
router.patch(
	"/:id",
	validateRequest(articleValidators.updateArticleValidationSchema),
	ArticleControllers.updateArticle
);

// get all articles
router.get("/", ArticleControllers.getAllArticles);

// Get single article
router.get("/:id", ArticleControllers.getSingleArticle);

// delete article
router.delete("/:id", ArticleControllers.detleteArticle);

export const articleRoutes = router;
