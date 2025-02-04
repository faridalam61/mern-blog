import SidebarMiniPost from "../components/SidebarMiniPost";
import DefaultLayout from "../layout/DefaultLayout";

const SinglePostPage = () => {
	return (
		<DefaultLayout>
			<div className="container mx-auto flex flex-col md:flex-row gap-8 py-12">
				<div className="w-full md:w-2/3 space-y-3 pr-8">
					<h1 className="py-4 text-3xl font-bold">
						Udemy - The Ultimate React Course 2024: React, Next.js, Redux & More
					</h1>

					<div className="overflow-hidden rounded-xl">
						<img
							src="/265.webp"
							className="w-full h-[400px] transition-transform duration-200 hover:scale-110 rounded-xl"
						/>
					</div>

					<div className="space-y-3 text-[18px] leading-8">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
							veniam voluptates reiciendis dicta ipsam rerum nulla saepe
							consequatur officiis necessitatibus!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Temporibus neque nemo maiores deleniti, excepturi laboriosam
							sapiente reiciendis earum explicabo sed ut ex itaque rerum, aut
							praesentium? Modi velit reprehenderit ipsum odit rem unde
							necessitatibus id tempore odio consequatur eligendi suscipit
							perferendis quisquam laboriosam eius consequuntur culpa, nesciunt
							pariatur temporibus corrupti?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
							distinctio saepe odit aspernatur adipisci qui, nihil rem earum
							reiciendis odio provident molestias cumque voluptatum eius
							doloribus tenetur sunt maxime eos!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Temporibus neque nemo maiores deleniti, excepturi laboriosam
							sapiente reiciendis earum explicabo sed ut ex itaque rerum, aut
							praesentium? Modi velit reprehenderit ipsum odit rem unde
							necessitatibus id tempore odio consequatur eligendi suscipit
							perferendis quisquam laboriosam eius consequuntur culpa, nesciunt
							pariatur temporibus corrupti?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
							distinctio saepe odit aspernatur adipisci qui, nihil rem earum
							reiciendis odio provident molestias cumque voluptatum eius
							doloribus tenetur sunt maxime eos!
						</p>
					</div>
				</div>
				<div className="w-1/3 ">
					<h2 className="text-2xl py-4">Related Posts | Recent posts</h2>
					<div className="flex flex-col gap-3">
						<SidebarMiniPost />
						<SidebarMiniPost />
						<SidebarMiniPost />
						<SidebarMiniPost />
						<SidebarMiniPost />
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
};
export default SinglePostPage;
