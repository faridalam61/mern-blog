import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { dbConnection } from "./db/config";
import notFound from "./middlewares/notFound";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import { userRouter } from "./modules/user/user.routes";
import { authRoutes } from "./modules/auth/auth.routes";
import { articleRoutes } from "./modules/article/article.routes";
import { categoryRouter } from "./modules/category/category.routes";
import { commentRoutes } from "./modules/comment/comment.routes";

dotenv.config();
const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/article", articleRoutes);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/comment", commentRoutes);
app.use("*", notFound);
app.use(globalErrorHandler);

app.listen(port, () => {
	dbConnection();
	console.log("App started on port: ", port);
});
