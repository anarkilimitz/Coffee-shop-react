import React from 'react';
import styles from './catalog.module.scss';
import Aromis from '../../shared/assets/img/main-cards/aromis.png';
import Presto from '../../shared/assets/img/main-cards/presto.png';
import Solimo from '../../shared/assets/img/main-cards/solimo.png';

const Catalog = () => {
	const mockData = [
		{
			img: Aromis,
			altimg: 'Aromis',
			title: 'Aromis',
			descr: 'Solimo Coffee Beans 2 kg',
			price: 7.5,
		},
		{
			img: Presto,
			altimg: 'Presto',
			title: 'Presto',
			descr: 'Presto Coffee Beans 1 kg',
			price: 8.3,
		},
		{
			img: Solimo,
			altimg: 'Solimo',
			title: 'Solimo',
			descr: 'AROMISTICO Coffee 1 kg',
			price: 9,
		},
	];

	// Компонент карточки
	const MenuCard = ({ src, alt, title, descr, price }) => {
		const transfer = 92;
		const priceInUAH = price * transfer;

		return (
			<div className={styles.menu__item}>
				<img src={src} alt={alt} />
				<h3 className={styles.menu__item_subtitle}>{title}</h3>
				<div className={styles.menu__item_descr}>{descr}</div>
				<div className={styles.menu__item_divider}></div>
				<div className={styles.menu__item_price}>
					<div className={styles.menu__item_cost}>Цена:</div>
					<div className={styles.menu__item_total}>
						<span>{priceInUAH}</span> руб / 1кг
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
