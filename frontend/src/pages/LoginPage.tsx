import LoginForm from "../components/LoginForm";
import AuthLayout from "../layout/AuthLayout";

const LoginPage = () => {
	return (
		<AuthLayout>
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="bg-white dark:bg-gray-800 rounded-lg px-8 pt-8 pb-10 ring shadow-xl ring-gray-900/5 w-full max-w-md">
					<LoginForm />
				</div>
			</div>
		</AuthLayout>
	);
};
export default LoginPage;
