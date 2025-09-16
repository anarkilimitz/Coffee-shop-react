import React, { useState } from 'react';
import styles from './CatalogAbout.module.scss';
import Aromis from '../../shared/assets/img/main-cards/aromis.png';
import Filter from '../filter/filter';

const CatalogAbout = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCountries, setSelectedCountries] = useState([]);

	const handleSearch = (term) => {
		setSearchTerm(term);
	};

	const handleCountryFilter = (country) => {
		setSelectedCountries((prev) =>
			prev.includes(country)
				? prev.filter((c) => c !== country)
				: [...prev, country]
		);
	};

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

	const filteredData = mockData.filter((item) => {
		const matchesSearch = item.title
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesCountry =
			selectedCountries.length === 0 || selectedCountries.includes(item.descr);
		return matchesSearch && matchesCountry;
	});

	const MenuCard = ({ src, alt, title, descr, price }) => {
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
			<Filter
				onSearch={handleSearch}
				onCountryFilter={handleCountryFilter}
				selectedCountries={selectedCountries}
			/>
			<div className={styles.menu__field}>
				<div className={styles.container}>
					{filteredData.map(({ img, altimg, title, descr, price }, index) => (
						<MenuCard
							key={index}
							src={img}
							alt={altimg}
							title={title}
							descr={descr}
							price={price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CatalogAbout;
