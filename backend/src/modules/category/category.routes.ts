import express from "express";
import { CategoryControllers } from "./category.controllers";
import { categoryValidators } from "./category.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

// Create category
router.post(
	"/",
	validateRequest(categoryValidators.createCategoryValidationSchema),
	CategoryControllers.createCategory
);

// update Category
router.patch(
	"/:id",
	validateRequest(categoryValidators.updateCategoryValidationSchema),
	CategoryControllers.updateCategory
);

// Delete category
router.delete("/:id", CategoryControllers.deleteCategory);

// Get all categories
router.get("/", CategoryControllers.getAllCategory);

// Get single category
router.get("/:id", CategoryControllers.getSingleCategory);

export const categoryRouter = router;
