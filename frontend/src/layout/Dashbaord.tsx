import React, { useState } from "react";
import {
	AiOutlineDashboard,
	AiOutlineFire,
	AiOutlineMenuUnfold,
	AiOutlineRead,
	AiOutlineSetting,
	AiOutlineShareAlt,
	AiOutlineTeam,
	AiOutlineUser,
} from "react-icons/ai";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";
import StatsCard from "../components/dashboard/StatsCard";

interface MenuItem {
	name: string;
	icon: React.ReactNode;
	subItems?: string[];
}

const menuItems: MenuItem[] = [
	{
		name: "Dashboards",
		icon: <AiOutlineDashboard />,
	},
	{
		name: "Posts",
		icon: <AiOutlineRead />,
		subItems: ["Add new", "All posts", "Categories"],
	},
	{ name: "Users", icon: <AiOutlineTeam /> },
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

				{/* Navigation Menu */}
				<nav className="mt-4">
					{menuItems.map((item) => (
						<div key={item.name}>
							<button
								onClick={() => item.subItems && toggleExpand(item.name)}
								className="flex w-full items-center px-4 py-2 text-gray-400 hover:bg-gray-800 hover:text-white text-[15px] dark:hover:bg-gray-700"
							>
								<span className="mr-3">{item.icon}</span>
								<span>{item.name}</span>
								{item.subItems && (
									<span className="ml-auto">
										{expandedItem === item.name ? (
											<RxCaretDown size="20" />
										) : (
											<RxCaretRight size="20" />
										)}
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
					<button className="flex w-full items-center text-gray-400 hover:text-white text-[15px]">
						<span className="mr-3">
							<AiOutlineSetting />
						</span>{" "}
						Menu settings
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
								<AiOutlineMenuUnfold />
							</button>
							<h1 className="text-xl font-semibold">Business overview</h1>
						</div>
						<div className="flex items-center gap-4">
							<div className="relative">
								<button
									onClick={() => setUserDropdownOpen(!userDropdownOpen)}
									className="p-2"
								>
									<AiOutlineUser />
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
							{/* Dark toggler here */}
						</div>
					</div>
				</header>

				{/* Content Area */}
				<div className="p-6">
					{/* Your dashboard content goes here. */}

					<div className="flex flex-col md:flex-row gap-4 w-full items-center justify-between">
						<StatsCard
							title="4000+"
							description="Registered user"
							icon={<AiOutlineTeam size="25" />}
						/>
						<StatsCard
							title="400+"
							description="Blog posts"
							icon={<AiOutlineRead size="25" />}
						/>
						<StatsCard
							title="300+"
							description="Post Shared"
							icon={<AiOutlineShareAlt size="25" />}
						/>
						<StatsCard
							title="40000+"
							description="Post views"
							icon={<AiOutlineFire size="25" />}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
