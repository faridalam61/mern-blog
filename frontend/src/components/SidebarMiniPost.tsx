const SidebarMiniPost = () => {
	return (
		<div className="flex items-center justify-center gap-4 cursor-pointer">
			<div className="w-2/5 overflow-hidden rounded-xl">
				<img
					src="/265.webp"
					className="w-full rounded-xl transition-transform duration-200 hover:scale-110"
				/>
			</div>
			<div className="w-3/5">
				<h3 className="text-gray-900 dark:text-white mt-4 font-medium tracking-tight ">
					Writes upside-down Writes upside-down Writes upside-down
				</h3>
				<p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
					Writes upside-down Writes upside-down Writes upside-down
				</p>
			</div>
		</div>
	);
};
export default SidebarMiniPost;
