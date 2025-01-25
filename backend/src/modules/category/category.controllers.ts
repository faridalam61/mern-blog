import catchAsync from "../../utils/catchAsync";
import { OK } from "../../utils/httpStatusCode";
import sendResponse from "../../utils/sendResponse";
import { CategoryServices } from "./category.services";

// Create category
const createCategory = catchAsync (async (req,res)=>{
    const payload = req.body;
    const result = await CategoryServices.createCategoryIntoDB(payload)

    sendResponse(res,{
        statusCode: OK,
        success: true,
        message:"Category created successfully",
        data: result
    })
})

// update Category
const updateCategory = catchAsync (async (req,res)=>{
    const payload = req.body;
    const {id} = req.params;

    const result = await CategoryServices.updateCategoryIntoDB(id,payload)

    sendResponse(res,{
        statusCode: OK,
        success: true,
        message:"Category updated successfully",
        data: result
    })
})

// Delete category
const deleteCategory = catchAsync (async (req,res)=>{
    const {id} = req.params;

    const result = await CategoryServices.deleteCategoryFromDB(id)

    sendResponse(res,{
        statusCode: OK,
        success: true,
        message:"Category deleted successfully",
        data: result
    })
})

// Get all category
const getAllCategory = catchAsync (async (req,res)=>{
    
    const result = await CategoryServices.getAllCategoryFromDB()

    sendResponse(res,{
        statusCode: OK,
        success: true,
        message:"Category fetched successfully",
        data: result
    })
})


// Get single category
const getSingleCategory = catchAsync (async (req,res)=>{
    const {id} = req.params;
    const result = await CategoryServices.getSingleCategory(id)

    sendResponse(res,{
        statusCode: OK,
        success: true,
        message:"Category fetched successfully",
        data: result
    })
})

export const CategoryControllers = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategory,
    getSingleCategory
}