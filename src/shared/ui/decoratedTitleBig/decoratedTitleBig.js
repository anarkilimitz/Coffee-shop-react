import React from 'react';
import { ReactComponent as CoffeeBeansIcon } from '../../assets/icons/logo-coffee/logo-coffee-big.svg';
import styles from './decoratedTitleBig.module.scss';

const decoratedTitleBig = () => {
	return (
		<div className={styles.decoratedTitleBig}>
			<CoffeeBeansIcon />
		</div>
	);
};

export default decoratedTitleBig;
