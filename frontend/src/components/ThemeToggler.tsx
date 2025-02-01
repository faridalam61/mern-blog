"use client";

import { AiFillSun, AiFillMoon } from "react-icons/ai";

import { useTheme } from "../hooks/useTheme";

export function ThemeToggler() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
			aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
		>
			{theme === "light" ? (
				<AiFillMoon className="w-6 h-6 text-gray-800" />
			) : (
				<AiFillSun className="w-6 h-6 text-yellow-300" />
			)}
		</button>
	);
}
