import { ThemeToggler } from "./ThemeToggler";

const Navbar = () => {
	return (
		<header className="p-4 flex justify-between items-center">
			<h1 className="text-2xl font-bold">My App</h1>
			<ThemeToggler />
		</header>
	);
};
export default Navbar;
