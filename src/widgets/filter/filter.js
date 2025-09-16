import React from 'react';
import styles from './filter.module.scss';

// Компонент Filter предоставляет интерфейс для фильтрации карточек по тексту и странам
// Принимает пропсы:
// - onSearch: функция для обработки текста поиска
// - onCountryFilter: функция для обработки выбора страны
// - selectedCountries: массив выбранных стран для стилизации активных кнопок
const Filter = ({ onSearch, onCountryFilter, selectedCountries }) => {
	// Список стран для кнопок фильтра
	const countries = ['Brazil', 'Kenya', 'Columbia'];

	// Обработчик изменения текста в поле ввода
	// Вызывается при каждом изменении текста в <input>
	const handleInputChange = (e) => {
		onSearch(e.target.value); // Передаем введенный текст в родительский компонент (CatalogAbout)
	};

	// Обработчик клика по кнопке страны
	// Вызывается при клике на любую кнопку (Brazil, Kenya, Columbia)
	const handleButtonClick = (country) => {
		onCountryFilter(country); // Передаем выбранную страну в родительский компонент
	};

	return (
		<section className={styles.filter}>
			<div className={styles.filter__wrapper}>
				<div className={styles.filter__wrapper_look}>
					{/* Блок для текстового поиска */}
					<div className={styles.filter__input_block}>
						<h4 className={styles.filter__title}>Looking for</h4>
						<input
							type="text"
							className={styles['form-control']}
							placeholder="Type of coffee"
							onChange={handleInputChange} // Вызываем handleInputChange при вводе текста
						/>
					</div>
					{/* Блок для фильтрации по странам */}
					<div className={styles.filter__wrapper_item}>
						<h4 className={styles.filter__title}>Or filter</h4>
						<div className={styles.filter__wrapper_btn}>
							{/* Рендерим кнопки для каждой страны */}
							{countries.map((country) => (
								<button
									key={country} // Уникальный ключ для каждой кнопки
									className={`${styles.filter__btn} ${
										// Если страна находится в selectedCountries, добавляем класс active для стилизации
										selectedCountries.includes(country) ? styles.active : ''
									}`}
									onClick={() => handleButtonClick(country)} // Вызываем handleButtonClick при клике
								>
									{country}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Filter;
