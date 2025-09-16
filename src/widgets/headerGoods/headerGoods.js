import React from 'react';
import { Link } from 'react-router-dom';
import styles from './headerGoods.module.scss';
import DecoratedTitleBig from '../../shared/ui/decoratedTitleBig/decoratedTitleBig';

const HeaderGoods = () => {
	return (
		<header className={styles.header_goods}>
			<nav>
				<DecoratedTitleBig />
				<Link to="/">Coffee house</Link>
				<Link to="/about">About Us</Link>
				<Link to="/goods">For your pleasure</Link>
				<Link to="/country">Our coffee</Link>
			</nav>
			<div className={styles.title_header_goods}>
				<h2>For your pleasure</h2>
			</div>
		</header>
	);
};

export default HeaderGoods;
