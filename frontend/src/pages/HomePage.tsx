import { useNavigate } from "react-router";
import BlogCard from "../components/BlogCard";
import Heading from "../components/Heading";
import HeroSection from "../components/HeroSection";
import DefaultLayout from "../layout/DefaultLayout";

export const HomePage = () => {
	const router = useNavigate();
	return (
		<DefaultLayout>
			<Heading title="inficourses - infinity of free courses" />
			<HeroSection />
			<div className="container mx-auto mt-20 px-3 md:px-0">
				<Heading
					title="Latest Posts"
					description="Hello this is a test description. hello hello buddy. testing"
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
				<div className="text-center px-4 py-8">
					<button
						className="bg-gray-800 dark:bg-white dark:text-black text-white px-8 py-4 rounded-md cursor-pointer hover:scale-110 transition-transform duration-300"
						onClick={() => router("/all-posts")}
					>
						View all posts
					</button>
				</div>
			</div>
		</DefaultLayout>
	);
};
