import { Link } from "react-router";
import { ThemeToggler } from "./ThemeToggler";

const Navbar = () => {
	return (
		<header className="p-4 ">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">
					<Link to="/">MERN BLOG</Link>
				</h1>
				<div className="flex gap-4 items-center justify-center">
					<Link to="/all-posts">All Posts</Link>
					<Link to="/category/abc">Category Page</Link>
					<Link to="/post/abc">Single Post</Link>
				</div>
				<div className="flex items-center justify-end gap-6">
					<Link to="/login">Login</Link>
					<ThemeToggler />
				</div>
			</div>
		</header>
	);
};
export default Navbar;
