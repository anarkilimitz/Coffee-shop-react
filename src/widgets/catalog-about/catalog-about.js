import React from 'react';
import styles from './catalog-about.module.scss';
import Aromis from '../../shared/assets/img/main-cards/aromis.png';

const Catalog = () => {
	const mockData = [
		{
			img: Aromis,
			altimg: 'Brazil',
			title: 'AROMISTICO Coffee 1 kg',
			descr: 'Brazil',
			price: 7.5,
		},
		{
			img: Aromis,
			altimg: 'Kenya',
			title: 'AROMISTICO Coffee 1 kg',
			descr: 'Kenya',
			price: 8.3,
		},
		{
			img: Aromis,
			altimg: 'Columbia',
			title: 'AROMISTICO Coffee 1 kg',
			descr: 'Columbia',
			price: 9,
		},
		{
			img: Aromis,
			altimg: 'Brazil',
			title: 'AROMISTICO Coffee 1 kg',
			descr: 'Brazil',
			price: 7.5,
		},
		{
			img: Aromis,
			altimg: 'Brazil',
			title: 'AROMISTICO Coffee 1 kg',
			descr: 'Brazil',
			price: 7.5,
		},
		{
			img: Aromis,
			altimg: 'Brazil',
			title: 'AROMISTICO Coffee 1 kg',
			descr: 'Brazil',
			price: 7.5,
		},
	];

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
			<div className={styles.menu__field}>
				<div className={styles.container}>
					{mockData.map(({ img, altimg, title, descr, price }, index) => (
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

export default Catalog;
