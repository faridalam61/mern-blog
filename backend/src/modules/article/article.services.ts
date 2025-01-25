import { TArticle } from "./article.interface";
import { Article } from "./article.model";

// create article
const createArticleIntoDB = async (payload: TArticle)=>{
    const result = await Article.create(payload);
    return result;
}

// update article
const updateArticleIntoDB = async (id: string, payload:Partial<TArticle>)=>{
    const result = await Article.findByIdAndUpdate(id, payload,{new: true})
    return result;
}

// get all articles
const getAllArticlesFromDB = async ()=>{
    const result = await Article.find()
    return result;
}

// Get single article
const getSingleArticle = async (id: string)=>{
    const result = await Article.findById(id)
    return result;
}

// dete article
const deleteArticleFromDB = async (id: string)=>{
    const result = await Article.findByIdAndDelete(id)
    return result;
}

export const ArticleServices = {
    createArticleIntoDB, updateArticleIntoDB, getAllArticlesFromDB, getSingleArticle, deleteArticleFromDB
}