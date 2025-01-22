import { ErrorRequestHandler } from "express";
import { INTERNAL_SERVER_ERROR } from "../utils/httpStatusCode";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
	res.status(INTERNAL_SERVER_ERROR).json({
		success: false,
		message: "Internal server error",
		err,
		stack: process.env.NODE_ENV === "development" ? err?.stack : null,
	});
};

export default globalErrorHandler;
