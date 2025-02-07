const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
			<main className="p-4 min-h-[85vh]">{children}</main>
		</body>
	);
};
export default AuthLayout;
