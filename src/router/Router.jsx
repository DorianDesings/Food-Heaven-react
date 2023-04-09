import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='about-us' element={<h1>ABOUT US</h1>} />
				<Route path='menu' element={<h1>MENU</h1>} />
				<Route path='blog' element={<h1>BLOG</h1>} />
				<Route path='contact' element={<h1>CONTACT</h1>} />
			</Route>
		</Routes>
	);
};

export default Router;
