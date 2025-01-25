import catchAsync from "../../utils/catchAsync";
import { OK } from "../../utils/httpStatusCode";
import sendResponse from "../../utils/sendResponse";
import { ArticleServices } from "./article.services";

// create article
const createArticle = catchAsync (async (req,res)=>{
    const payload = req.body;
    const result = await ArticleServices.createArticleIntoDB(payload)

    sendResponse(res, {
        statusCode: OK,
        success: true,
        message:"Article created successfully!",
        data: result
    })
})

// update article
const updateArticle = catchAsync (async (req,res)=>{
    const payload = req.body;
    const {id} = req.params;
    const result = await ArticleServices.updateArticleIntoDB(id, payload)

    sendResponse(res, {
        statusCode: OK,
        success: true,
        message:"Article updated successfully!",
        data: result
    })
})

// get all articles
const getAllArticles = catchAsync (async (req,res)=>{
 
    const result = await ArticleServices.getAllArticlesFromDB()

    sendResponse(res, {
        statusCode: OK,
        success: true,
        message:"All articles retrived successfully!",
        data: result
    })
})

// Get single article
const getSingleArticle = catchAsync (async (req,res)=>{
    const {id} = req.params;
    const result = await ArticleServices.getSingleArticle(id)

    sendResponse(res, {
        statusCode: OK,
        success: true,
        message:"Article retrived successfully!",
        data: result
    })
})

// dete article
const detleteArticle = catchAsync (async (req,res)=>{
    const {id} = req.params;
    const result = await ArticleServices.deleteArticleFromDB(id)

    sendResponse(res, {
        statusCode: OK,
        success: true,
        message:"Article deleted successfully!",
        data: result
    })
})

export const ArticleControllers = {
    createArticle, updateArticle, getAllArticles, getSingleArticle,detleteArticle
}