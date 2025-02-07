import { useForm, Resolver } from "react-hook-form";
import { Link } from "react-router";

type FormValues = {
	email: string;
	password: string;
};

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: values.email ? values : {},
		errors: !values.email
			? {
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

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ resolver });
	const onSubmit = handleSubmit((data) => console.log(data));

	return (
		<div>
			<div className="pb-8 space-y-2">
				<h2 className="text-xl">Welcome back!</h2>
				<p className="text-sm">Enter your email and password to login</p>
			</div>

			<form onSubmit={onSubmit} className="space-y-4">
				<label className=" block">Email</label>
				<input
					{...register("email")}
					placeholder="Enter your email address"
					className="w-full border p-3 rounded-md"
					type="email"
				/>
				{errors?.email && <p className="text-sm">{errors.email.message}</p>}
				<label className="block">Password</label>
				<input
					{...register("password")}
					placeholder="Enter your password"
					className="w-full border p-3 rounded-md"
					type="password"
				/>
				{errors?.password && (
					<p className="text-sm">{errors.password.message}</p>
				)}

				<input
					type="submit"
					className="w-full bg-amber-500 rounded-md p-3 cursor-pointer"
					value="Login"
				/>
			</form>
			<div className="space-y-4 pt-4">
				<p className="text-sm text-center">Or login with</p>
				<button className="w-full bg-amber-500 rounded-md p-3 cursor-pointer">
					Login with google
				</button>
				<button className="w-full bg-amber-500 rounded-md p-3 cursor-pointer">
					Login with github
				</button>
				<p className="text-sm">
					Don't have an account? <Link to="/register">Create an account</Link>
				</p>
			</div>
		</div>
	);
};
export default LoginForm;
