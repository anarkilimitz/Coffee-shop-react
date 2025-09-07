// src/app/app.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss'; // Относительный путь

// Импорты компонентов
import Header from '../widgets/header';
import Footer from '../widgets/footer';

// Импорты страниц
import Home from '../pages/home';
import Catalog from '../pages/catalog';
import About from '../pages/about';
import Goods from '../pages/goods';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app container">
					<Header />
					<main className="app__main">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/catalog" element={<Catalog />} />
							<Route path="/about" element={<About />} />
							<Route path="/goods" element={<Goods />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
