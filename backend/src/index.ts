import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { dbConnection } from "./db/config";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	dbConnection();
	console.log("App started on port: ", port);
});
