import { useParams } from "react-router";
import BlogCard from "../components/BlogCard";
import Heading from "../components/Heading";
import DefaultLayout from "../layout/DefaultLayout";

const CategoryPage = () => {
	const { category } = useParams();
	return (
		<DefaultLayout>
			<div className="container mx-auto mt-20 px-3 md:px-0">
				<Heading
					title={category || "Uncategorized"}
					description="Hello this is a test description. hello hello buddy. testing"
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</div>
		</DefaultLayout>
	);
};
export default CategoryPage;
