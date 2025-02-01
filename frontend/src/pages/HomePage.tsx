import BlogCard from "../components/BlogCard";
import Heading from "../components/Heading";
import DefaultLayout from "../layout/DefaultLayout";

export const HomePage = () => {
	return (
		<DefaultLayout>
			<div className="container mx-auto px-3 md:px-0">
				<Heading
					title="Latest Posts"
					description="Hello this is a test description. hello hello buddy. testing"
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</div>
		</DefaultLayout>
	);
};
