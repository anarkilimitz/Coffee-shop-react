import React from 'react';
import styles from './filter.module.scss';

const Filter = ({ onSearch, onCountryFilter, selectedCountries }) => {
	const countries = ['Brazil', 'Kenya', 'Columbia'];

	const handleInputChange = (e) => {
		onSearch(e.target.value);
	};

	const handleButtonClick = (country) => {
		onCountryFilter(country);
	};

	return (
		<section className={styles.filter}>
			<div className={styles.filter__wrapper}>
				<div className={styles.filter__wrapper_look}>
					<div className={styles.filter__input_block}>
						<h4 className={styles.filter__title}>Looking for</h4>
						<input
							type="text"
							className={styles['form-control']}
							placeholder="Type of coffee"
							onChange={handleInputChange}
						/>
					</div>
					<div className={styles.filter__wrapper_item}>
						<h4 className={styles.filter__title}>Or filter</h4>
						<div className={styles.filter__wrapper_btn}>
							{countries.map((country) => (
								<button
									key={country}
									className={`${styles.filter__btn} ${
										selectedCountries.includes(country) ? styles.active : ''
									}`}
									onClick={() => handleButtonClick(country)}
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
