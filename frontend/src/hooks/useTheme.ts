import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(() => {
		// Get theme from localStorage or system preference on first render
		if (typeof window !== "undefined") {
			const savedTheme = localStorage.getItem("theme") as Theme | null;
			if (savedTheme) {
				return savedTheme;
			} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				return "dark";
			}
		}
		return "light";
	});

	// Update localStorage and class on theme change
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return { theme, setTheme };
}
