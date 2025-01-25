import { model, Schema } from "mongoose";
import { TComments } from "./comment.interface";

const commentSchema = new Schema<TComments>({
    content: {type: String},
    authorId:{type: Schema.Types.ObjectId}
},{timestamps: true})

export const Comment = model<TComments>("Comment", commentSchema)