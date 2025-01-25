import { Types } from "mongoose";

export type TComments = {
	content: string;
	authorId: Types.ObjectId;
};
