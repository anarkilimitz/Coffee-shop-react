import React from 'react';
import { ReactComponent as CoffeeBeansIcon } from '../../assets/icons/logo-coffee/logo-coffee-black.svg';
import styles from './decoratedTitle.module.scss';

const decoratedTitle = () => {
	return (
		<div className={styles.decoratedTitle}>
			<div className={styles.line}></div>
			<CoffeeBeansIcon />
			<div className={styles.line}></div>
		</div>
	);
};

export default decoratedTitle;
