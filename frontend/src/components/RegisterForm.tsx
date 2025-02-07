import { useForm, Resolver } from "react-hook-form";
import { Link } from "react-router";

type FormValues = {
	name: string;
	email: string;
	password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.email ? values : {},
		errors: !values.email
			? {
					name: {
						type: "required",
						message: "Name is required",
					},
					email: {
						type: "required",
						message: "Email is required.",
					},
					password: {
						type: "required",
						message: "Password is required",
					},
			  }
			: {},
	};
};

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver });
	const onSubmit = handleSubmit((data) => console.log(data));

	return (
		<div>
			<div className="pb-8 space-y-2">
				<h2 className="text-2xl">Create an account</h2>
				<p className="text-sm">Fill out the form to create an account</p>
			</div>

			<form onSubmit={onSubmit} className="space-y-4">
				<label className=" block">Name</label>
				<input
					{...register("name")}
					placeholder="Enter your full name"
					className="w-full border p-3 rounded-md"
					type="text"
				/>
				{errors?.name && (
					<p className="text-sm text-red-700">{errors.name.message}</p>
				)}

				<label className=" block">Email</label>
				<input
					{...register("email")}
					placeholder="Enter your email address"
					className="w-full border p-3 rounded-md"
					type="email"
				/>
				{errors?.email && (
					<p className="text-sm text-red-700">{errors.email.message}</p>
				)}
				<label className="block">Password</label>
				<input
					{...register("password")}
					placeholder="Enter your password"
					className="w-full border p-3 rounded-md"
					type="password"
				/>
				{errors?.password && (
					<p className="text-sm text-red-700">{errors.password.message}</p>
				)}

				<input
					type="submit"
					className="w-full bg-amber-500 rounded-md p-3 cursor-pointer"
					value="Create account"
				/>
			</form>
			<div className="space-y-4 pt-4">
				<p className="text-sm">
					Already have an account? <Link to="/login">Login here</Link>
				</p>
			</div>
		</div>
	);
};
export default RegisterForm;
