import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="about" element={<AboutPage />} />

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
