import { TComments } from "./comment.interface";
import { Comment } from "./comment.model";


const createCommentIntoDB = async (payload: TComments)=>{
    const result = await Comment.create(payload);
    return result;
}


const updateCommentIntoDB = async (id: string, payload:Partial<TComments>)=>{
    const result = await Comment.findByIdAndUpdate(id, payload,{new: true})
    return result;
}


const getAllCommentsFromDB = async ()=>{
    const result = await Comment.find()
    return result;
}


const getSingleCommentFromDB = async (id: string)=>{
    const result = await Comment.findById(id)
    return result;
}


const deleteCommentFromDB = async (id: string)=>{
    const result = await Comment.findByIdAndDelete(id)
    return result;
}

export const CommentServices = {
    createCommentIntoDB, updateCommentIntoDB,deleteCommentFromDB,getAllCommentsFromDB,getSingleCommentFromDB
}