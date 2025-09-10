import React from 'react';
import styles from './promo.module.scss';
import Catalog from '../../pages/catalog';

const Promo = () => {
	return (
		<section className={styles.promo}>
			<div className={styles.container}>
				<h2 className={styles.title_promo}>Our best</h2>
				<Catalog />
			</div>
		</section>
	);
};

export default Promo;
