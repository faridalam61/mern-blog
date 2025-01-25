import catchAsync from "../../utils/catchAsync";
import { OK } from "../../utils/httpStatusCode";
import sendResponse from "../../utils/sendResponse";
import { CommentServices } from "./comment.services";

const createComment = catchAsync(async (req,res)=>{
    const payload = req.body;
    const result = await CommentServices.createCommentIntoDB(payload)

    sendResponse(res,{
        statusCode:OK,
        success: true,
        message:"Comments created succssfully",
        data: result
    })
})

const updateComment = catchAsync(async (req,res)=>{
    const payload = req.body;
    const {id} = req.params;
    const result = await CommentServices.updateCommentIntoDB(id, payload)

    sendResponse(res,{
        statusCode:OK,
        success: true,
        message:"Comments updated succssfully",
        data: result
    })
})

const deleteComment = catchAsync(async (req,res)=>{
    const {id} = req.params;
    const result = await CommentServices.deleteCommentFromDB(id)

    sendResponse(res,{
        statusCode:OK,
        success: true,
        message:"Comment deleted succssfully",
        data: result
    })
})

const getAllComments = catchAsync(async (req,res)=>{
   
    const result = await CommentServices.getAllCommentsFromDB()

    sendResponse(res,{
        statusCode:OK,
        success: true,
        message:"Comments featched succssfully",
        data: result
    })
})


const getSingleComment = catchAsync(async (req,res)=>{
    const {id} = req.params;
    const result = await CommentServices.getSingleCommentFromDB(id)

    sendResponse(res,{
        statusCode:OK,
        success: true,
        message:"Comment fetched succssfully",
        data: result
    })
})


export const CommentControllers = {
    createComment,
    updateComment,
    deleteComment,
    getAllComments,
    getSingleComment
}