import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import './styles/global.scss';

// Импорты компонентов
import Header from '../widgets/header';
import HeaderAbout from '../widgets/headerAbout/headerAbout';
import HeaderGoods from '../widgets/headerGoods/headerGoods';
import Footer from '../widgets/footer';

// Импорты страниц
import Home from '../pages/home';
import Goods from '../pages/goods/goods';
import About from '../pages/about/about';
import Country from '../pages/country/country';

class App extends Component {
	render() {
		return (
			<Router>
				<AppContent />{' '}
				{/* Выносим содержимое в отдельный компонент для useLocation */}
			</Router>
		);
	}
}

// Новый функциональный компонент для содержимого
const AppContent = () => {
	const location = useLocation(); // Получаем текущий путь

	return (
		<div className="app container">
			{/* Условно рендерим Header или HeaderAbout в зависимости от пути */}
			{location.pathname === '/about' || location.pathname === '/country' ? (
				<HeaderAbout />
			) : location.pathname === '/goods' ? (
				<HeaderGoods />
			) : (
				<Header />
			)}
			<main className="app__main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/goods" element={<Goods />} />
					<Route path="/about" element={<About />} />
					<Route path="/country" element={<Country />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
