import { useState } from "react";

interface MenuItem {
	name: string;
	icon: string;
	subItems?: string[];
}

const menuItems: MenuItem[] = [
	{
		name: "Dashboards",
		icon: "📊",
		subItems: ["Overview", "Analytics", "Reports"],
	},
	{ name: "Transactions", icon: "💳" },
];

export default function Dashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [expandedItem, setExpandedItem] = useState<string | null>(null);
	const [userDropdownOpen, setUserDropdownOpen] = useState(false);

	const toggleExpand = (itemName: string) => {
		setExpandedItem(expandedItem === itemName ? null : itemName);
	};

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			{/* Sidebar */}
			<aside
				className={`fixed left-0 top-0 z-40 h-screen w-64 transform bg-gray-900 text-white transition-transform duration-300 ease-in-out dark:bg-gray-800 ${
					sidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0`}
			>
				{/* New Button */}
				<div className="p-4">
					<button className="w-full rounded-md bg-gray-800 p-2 text-left text-sm font-medium dark:bg-gray-700">
						+ New
					</button>
				</div>

				{/* Bookmarks Section */}
				<div className="px-4 py-2">
					<div className="flex items-center justify-between text-sm">
						<span>BOOKMARKS</span>
						<button className="text-gray-400 hover:text-white">✏️</button>
					</div>
					<button className="mt-2 flex w-full items-center text-gray-400 hover:text-white">
						<span className="mr-2">+</span> Add a bookmark
					</button>
				</div>

				{/* Navigation Menu */}
				<nav className="mt-4">
					{menuItems.map((item) => (
						<div key={item.name}>
							<button
								onClick={() => item.subItems && toggleExpand(item.name)}
								className="flex w-full items-center px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700"
							>
								<span className="mr-3">{item.icon}</span>
								<span>{item.name}</span>
								{item.subItems && (
									<span className="ml-auto">
										{expandedItem === item.name ? "▼" : "▶"}
									</span>
								)}
							</button>
							{item.subItems && expandedItem === item.name && (
								<div className="bg-gray-800 dark:bg-gray-700 pl-8">
									{item.subItems.map((subItem) => (
										<button
											key={subItem}
											className="flex w-full items-center px-4 py-2 text-gray-400 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600"
										>
											{subItem}
										</button>
									))}
								</div>
							)}
						</div>
					))}
				</nav>

				{/* Menu Settings */}
				<div className="absolute bottom-0 w-full p-4">
					<button className="flex w-full items-center text-gray-400 hover:text-white">
						<span className="mr-3">⚙️</span> Menu settings
					</button>
				</div>
			</aside>

			{/* Main Content */}
			<main className="lg:ml-64 min-h-screen">
				{/* Header */}
				<header className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
					<div className="flex h-16 items-center justify-between px-4">
						<div className="flex items-center">
							<button
								onClick={() => setSidebarOpen(!sidebarOpen)}
								className="mr-4 text-gray-500 lg:hidden"
							>
								☰
							</button>
							<h1 className="text-xl font-semibold">Business overview</h1>
						</div>
						<div className="flex items-center gap-4">
							<div className="relative">
								<button
									onClick={() => setUserDropdownOpen(!userDropdownOpen)}
									className="p-2"
								>
									👤
								</button>
								{userDropdownOpen && (
									<div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="user-menu"
										>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
												role="menuitem"
											>
												Your Profile
											</a>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
												role="menuitem"
											>
												Sign out
											</a>
										</div>
									</div>
								)}
							</div>
							<button className="p-2">❔</button>
							<button className="p-2">🔍</button>
							<button className="p-2">🔔</button>
							<button className="p-2">⚙️</button>
						</div>
					</div>
				</header>

				{/* Content Area */}
				<div className="p-6">
					<p className="text-gray-600 dark:text-gray-300">
						Your dashboard content goes here.
					</p>
				</div>
			</main>
		</div>
	);
}
