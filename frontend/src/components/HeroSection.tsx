import SidebarPostCard from "./SidebarPostCard";

const HeroSection = () => {
	return (
		<div className="container mx-auto flex flex-col md:flex-row gap-6 items-start justify-center pb-10 border-b-4 border-dashed ">
			<div className="w-1/2  cursor-pointer">
				<div className="overflow-hidden rounded-xl">
					<img
						src="/265.webp"
						className="w-full h-[400px] transition-transform duration-200 hover:scale-110 rounded-xl"
					/>
				</div>
				<div className="flex items-center justify-start gap-3 mt-4">
					<div className="bg-gray-800 dark:bg-white dark:text-black text-white px-3 py-1 rounded-sm">
						category
					</div>
					<div className="bg-gray-800 dark:bg-white dark:text-black text-white px-3 py-1 rounded-sm">
						category
					</div>
				</div>

				<div className="">
					<h3 className="text-gray-900 dark:text-white mt-4 font-medium tracking-tight text-3xl">
						Writes upside-down Writes upside-down Writes upside-down
					</h3>
					<p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
						The Zero Gravity Pen can be used to write in any orientation,
						including upside-down.
					</p>
				</div>
			</div>
			<div className="w-1/2 flex flex-col gap-4">
				<SidebarPostCard />
				<SidebarPostCard />
				<SidebarPostCard />
			</div>
		</div>
	);
};
export default HeroSection;
