import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<h1>Footer</h1>
		</>
	);
};

export default Layout;
