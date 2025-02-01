const BlogCard = () => {
	return (
		<>
			<div className="bg-white dark:bg-gray-800 rounded-lg px-5 pt-5 pb-8 cursor-pointer ring shadow-xl ring-gray-900/5">
				<div className="overflow-hidden rounded-md">
					<img
						src="/265.webp"
						className="w-full transition-transform duration-200 hover:scale-110 rounded-md"
					/>
				</div>
				<div className="flex items-center justify-center gap-3 mt-4">
					<div className="bg-gray-800 dark:bg-white dark:text-black text-white px-3 py-1 rounded-sm">
						category
					</div>
					<div className="bg-gray-800 dark:bg-white dark:text-black text-white px-3 py-1 rounded-sm">
						category
					</div>
				</div>
				<div className="text-center">
					<h3 className="text-gray-900 dark:text-white mt-4 font-medium tracking-tight text-xl">
						Writes upside-down Writes upside-down Writes upside-down
					</h3>
					<p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
						The Zero Gravity Pen can be used to write in any orientation,
						including upside-down.
					</p>
				</div>
			</div>
		</>
	);
};

export default BlogCard;
