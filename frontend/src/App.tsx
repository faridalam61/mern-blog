import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AllPosts from "./pages/AllPosts";
import CategoryPage from "./pages/CategoryPage";
import SinglePostPage from "./pages/SinglePostPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./layout/Dashbaord";

function App() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="/all-posts" element={<AllPosts />} />
			<Route path="/category/:category" element={<CategoryPage />} />
			<Route path="/post/:postTitle" element={<SinglePostPage />} />

			<Route path="about" element={<AboutPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/dashboard" element={<Dashboard />} />

			{/* <Route element={<AuthLayout />}>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>

			<Route path="concerts">
				<Route index element={<ConcertsHome />} />
				<Route path=":city" element={<City />} />
				<Route path="trending" element={<Trending />} />
			</Route> */}
		</Routes>
	);
}

export default App;
