import { Link } from "react-router";

const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<div className="bg-white dark:bg-gray-800 text-center py-8 px-4 space-y-1.5 text-gray-500 dark:text-gray-400">
			<p>&copy; {date} All rights reserved.</p>
			<p>
				Developed by <Link to="https://farid-alam.com">Farid Alam</Link>
			</p>
		</div>
	);
};
export default Footer;
