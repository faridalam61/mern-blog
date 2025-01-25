import { Types } from "mongoose";

export type TArticle = {
	title: string;
	content: string;
	authorId: [Types.ObjectId];
	categories: [Types.ObjectId];
	tags: [Types.ObjectId];
	status: "published" | "draft";
};
