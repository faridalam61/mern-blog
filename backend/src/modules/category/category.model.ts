import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";

const categorySchema = new Schema<TCategory>(
	{
		title: { type: String, requried: true },
		description: { type: String },
	},
	{
		timestamps: true,
	}
);

export const Category = model<TCategory>("Category", categorySchema);
