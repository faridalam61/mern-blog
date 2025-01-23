export type TUser = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role: "admin" | "user";
	status: "active" | "blocked";
	isVerified: boolean;
	lastLogin: Date;
	passwordUpdatedAt: Date;
};
