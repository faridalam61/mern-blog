type StatsProps = {
	title: string;
	description: string;
	icon?: React.ReactNode;
};
const StatsCard = ({ title, description, icon }: StatsProps) => {
	return (
		<>
			<div className="bg-white dark:bg-gray-800 rounded-lg px-5 pt-5 pb-5 cursor-pointer ring shadow-xl ring-gray-900/5 w-full ">
				<div className="flex items-center justify-left gap-6">
					<div>
						<div className="rounded-full p-1 border">{icon}</div>
					</div>
					<div>
						<h2 className="text-2xl font-bold">{title}</h2>
						<p className="text-sm">{description}</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default StatsCard;
