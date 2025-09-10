import React from 'react';
import styles from './promo.module.scss';

const Promo = () => {
	return (
		<section className={styles.promo}>
			<div className={styles.container}>
				<h2 className={styles.title_promo}>Our best</h2>
			</div>
		</section>
	);
};

export default Promo;
