import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

import { passwordResetEamilTemplate } from "../templates/passwordResetEmail";
import { passwordChangeEamilTemplate } from "../templates/passwordChangedEmail";
import { verificationEamilTemplate } from "../templates/verificationEmail";

const resend = new Resend(process.env.RESEND_API);

const passwordResetMail = async (
	to: string,
	resetLink: string,
	name: string
) => {
	try {
		await resend.emails.send({
			from: "MERN Blog <admin@farid-alam.com>",
			to,
			subject: "Reset your password",
			html: passwordResetEamilTemplate
				.replace("{resetLink}", resetLink)
				.replace("{name}", name),
		});
	} catch (err) {
		console.log(err);
	}
};

const passwordChangedMail = async (to: string, name: string) => {
	try {
		await resend.emails.send({
			from: "MERN Blog <admin@farid-alam.com>",
			to,
			subject: "Password changed successfull",
			html: passwordChangeEamilTemplate.replace("{name}", name),
		});
	} catch (err) {
		console.log(err);
	}
};

const verificationMail = async (to: string, link: string, name: string) => {
	try {
		await resend.emails.send({
			from: "MERN Blog <admin@farid-alam.com>",
			to,
			subject: "Verify your email",
			html: verificationEamilTemplate
				.replace("{name}", name)
				.replace("{verificationLink}", link),
		});
	} catch (err) {
		console.log(err);
	}
};
export const sendMail = {
	passwordResetMail,
	passwordChangedMail,
	verificationMail,
};
