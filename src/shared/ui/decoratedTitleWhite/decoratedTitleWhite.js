import React from 'react';
import { ReactComponent as CoffeeBeansIcon } from '../../assets/icons/logo-coffee/logo-coffee-white.svg';
import styles from './decoratedTitleWhite.module.scss';

const decoratedTitleWhite = () => {
	return (
		<div className={styles.decoratedTitle}>
			<div className={styles.line}></div>
			<CoffeeBeansIcon />
			<div className={styles.line}></div>
		</div>
	);
};

export default decoratedTitleWhite;
