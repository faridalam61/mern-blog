import { NextFunction, Request, Response } from "express";
import { NOT_FOUND } from "../utils/httpStatusCode";

const notFound = (req: Request, res: Response, next: NextFunction) => {
	res.status(NOT_FOUND).json({
		success: false,
		message: "API Not Found !!",
		error: "",
	});
};

export default notFound;
