import React, { useState } from 'react';
import styles from './CatalogAbout.module.scss';
import Aromis from '../../shared/assets/img/main-cards/aromis.png';
import Filter from '../filter/filter';

// Компонент CatalogAbout отображает каталог кофе с фильтром по поиску и странам
const CatalogAbout = () => {
	// Состояние для хранения текста, введенного в поле поиска
	const [searchTerm, setSearchTerm] = useState('');
	// Состояние для хранения массива выбранных стран (например, ['Brazil', 'Kenya'])
	const [selectedCountries, setSelectedCountries] = useState([]);

	// Функция-обработчик для обновления текста поиска
	// Вызывается компонентом Filter при вводе текста в поле <input>
	const handleSearch = (term) => {
		setSearchTerm(term); // Обновляем searchTerm в состоянии
	};

	// Функция-обработчик для фильтрации по странам
	// Вызывается компонентом Filter при клике на кнопку страны
	const handleCountryFilter = (country) => {
		setSelectedCountries(
			(prev) =>
				prev.includes(country)
					? prev.filter((c) => c !== country) // Если страна уже выбрана, убираем её
					: [...prev, country] // Если страна не выбрана, добавляем её
		);
	};

	// Моковые данные — массив объектов, представляющих карточки кофе
	const mockData = [
		{
			img: Aromis,
			altimg: 'Brazil',
			title: 'AROMIS Coffee 1 kg',
			descr: 'Brazil',
			price: 7.5,
		},
		{
			img: Aromis,
			altimg: 'Kenya',
			title: 'Dark Dawn Roast 1 kg',
			descr: 'Kenya',
			price: 8.3,
		},
		{
			img: Aromis,
			altimg: 'Columbia',
			title: 'Espresso Essence 1 kg',
			descr: 'Columbia',
			price: 9,
		},
		{
			img: Aromis,
			altimg: 'Brazil',
			title: 'Cappuccino Craft 1 kg',
			descr: 'Brazil',
			price: 7.5,
		},
		{
			img: Aromis,
			altimg: 'Brazil',
			title: 'Barista Blend 1 kg',
			descr: 'Brazil',
			price: 7.5,
		},
		{
			img: Aromis,
			altimg: 'Brazil',
			title: 'Fireside Brew 1 kg',
			descr: 'Brazil',
			price: 7.5,
		},
	];

	// Фильтрация данных на основе текста поиска и выбранных стран
	const filteredData = mockData.filter((item) => {
		// Проверяем, соответствует ли заголовок карточки (title) введенному тексту поиска
		// toLowerCase() делает поиск нечувствительным к регистру
		const matchesSearch = item.title
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		// Проверяем, соответствует ли страна карточки (descr) выбранным странам
		// Если ни одна страна не выбрана (selectedCountries.length === 0), показываем все карточки
		const matchesCountry =
			selectedCountries.length === 0 || selectedCountries.includes(item.descr);
		// Карточка отображается, только если она соответствует обоим условиям
		return matchesSearch && matchesCountry;
	});

	// Создаем массив для рендеринга, чтобы всегда отображать 6 ячеек (3×2 сетка)
	// Если карточек меньше 6, добавляем пустые заглушки (null)
	const displayData = [
		...filteredData,
		...Array(Math.max(0, 6 - filteredData.length)).fill(null),
	];

	// Компонент карточки для отображения одной позиции кофе
	const MenuCard = ({ src, alt, title, descr, price }) => {
		// Конвертируем цену в рубли (цена в USD умножается на курс)
		const transfer = 92;
		const priceInUSD = price * transfer;

		return (
			<div className={styles.menu__item}>
				<img src={src} alt={alt} />
				<h3 className={styles.menu__item_subtitle}>{title}</h3>
				<div className={styles.menu__item_descr}>{descr}</div>
				<div className={styles.menu__item_divider}></div>
				<div className={styles.menu__item_price}>
					<div className={styles.menu__item_cost}>Цена:</div>
					<div className={styles.menu__item_total}>
						<span>{priceInUSD}</span> руб / 500г
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className={styles.menu}>
			{/* Компонент Filter для ввода текста поиска и выбора стран */}
			<Filter
				onSearch={handleSearch} // Передаем функцию для обработки текста поиска
				onCountryFilter={handleCountryFilter} // Передаем функцию для обработки фильтра по странам
				selectedCountries={selectedCountries} // Передаем массив выбранных стран для стилизации активных кнопок
			/>
			<div className={styles.menu__field}>
				<div className={styles.container}>
					{/* Рендерим 6 ячеек: либо карточки, либо пустые заглушки */}
					{displayData.map((item, index) =>
						item ? (
							// Если элемент существует, рендерим карточку
							<MenuCard
								key={index}
								src={item.img}
								alt={item.altimg}
								title={item.title}
								descr={item.descr}
								price={item.price}
							/>
						) : (
							// Если элемент null, рендерим пустую заглушку, чтобы сохранить структуру сетки
							<div key={index} className={styles.menu__item_placeholder} />
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default CatalogAbout;
