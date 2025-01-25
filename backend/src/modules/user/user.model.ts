import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>(
	{
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
		status: { type: String, enum: ["active", "blocked"], default: "active" },
		isVerified: { type: Boolean, default: false },
		lastLogin: { type: Date },
		passwordUpdatedAt: { type: Date, default: Date.now() },
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	const user = this;
	user.password = await bcrypt.hash(
		user.password,
		Number(process.env.SOLT_ROUND)
	);
	next();
});

export const User = model<TUser>("user", userSchema);
