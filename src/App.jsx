import { BrowserRouter } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
register();

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	);
};

export default App;
