import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<Link to="/">Coffee house</Link>
				<Link to="/catalog">Our coffee</Link>
				<Link to="/goods">For your pleasure</Link>
				<Link to="/about">About Us</Link>
			</nav>
			<div className={styles.title}>
				<h2>Everything You Love About Coffee</h2>
				<h3>We makes every day full of energy and taste</h3>
				<h3>Want to try our beans?</h3>
			</div>
		</header>
	);
};

export default Header;
