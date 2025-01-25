import { TCategory } from "./category.interface";
import { Category } from "./category.model";

// Create category
const createCategoryIntoDB = async (payload: TCategory)=>{
    const result = await Category.create(payload)
    return result;
}

// update Category
const updateCategoryIntoDB = async (id: string, payload: Partial<TCategory>)=>{
    const result = await Category.findByIdAndUpdate(id,payload,{new: true})
    return result;
}

// Delete category
const deleteCategoryFromDB = async(id: string)=>{
    const result = await Category.findByIdAndDelete(id)
    return result;
}

// Get all category
const getAllCategoryFromDB = async ()=>{
    const result = await Category.find()
    return result;
}

// Get single category
const getSingleCategory = async (id: string)=>{
    const result = await Category.findById(id)
    return result;
}

export const CategoryServices = {
    createCategoryIntoDB, updateCategoryIntoDB, deleteCategoryFromDB, getAllCategoryFromDB, getSingleCategory
}