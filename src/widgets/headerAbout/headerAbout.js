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
				<Link to="/goods">Our coffee</Link>
				<Link to="/country">For your pleasure</Link>
				<Link to="/about">About Us</Link>
			</nav>
			<div className={styles.title_header_about}>
				<h2>Our Coffee</h2>
			</div>
		</header>
	);
};

export default HeaderAbout;
