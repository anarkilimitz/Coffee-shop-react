import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'; // сброс стилей стандартный
import './app/styles/global.scss'; // базовые стили
import App from './app/app'; // правильный путь

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
