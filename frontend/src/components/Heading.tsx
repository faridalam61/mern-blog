type HeadingProps = {
	title: string;
	description?: string;
};
const Heading = ({ title, description }: HeadingProps) => {
	return (
		<div className="flex flex-col items-center justify-center gap-3 my-8 text-center">
			<h2 className="uppercase text-2xl md:text-3xl font-bold">{title}</h2>
			<p className="text-xl">{description}</p>
		</div>
	);
};
export default Heading;
