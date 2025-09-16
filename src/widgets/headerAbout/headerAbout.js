import React from 'react';
import { Link } from 'react-router-dom';
import styles from './headerAbout.module.scss';
import DecoratedTitleBig from '../../shared/ui/decoratedTitleBig/decoratedTitleBig';

const HeaderAbout = () => {
	return (
		<header className={styles.header_about}>
			<nav>
				<DecoratedTitleBig />
				<Link to="/">Coffee house</Link>
				<Link to="/about">About Us</Link>
				<Link to="/goods">For your pleasure</Link>
				<Link to="/country">Our coffee</Link>
			</nav>
			<div className={styles.title_header_about}>
				<h2>Our coffee</h2>
			</div>
		</header>
	);
};

export default HeaderAbout;
