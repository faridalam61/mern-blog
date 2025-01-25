import { model, Schema, Types } from "mongoose";
import { TArticle } from "./article.interface";

const articleSchema = new Schema<TArticle>(
	{
		title: { type: String, required: true },
		authorId: { type: [Schema.Types.ObjectId], required: true },
		categories: { type: [Schema.Types.ObjectId], required: true },
		tags: { type: [Schema.Types.ObjectId], required: true },
		content: { type: String, required: true },
		status: { type: String, enum: ["published", "draft"], default: "published" },
	},
	{
		timestamps: true,
	}
);

export const Article = model<TArticle>("Article", articleSchema);
