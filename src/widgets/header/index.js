import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import DecoratedTitleWhite from '../../shared/ui/decoratedTitleWhite/decoratedTitleWhite';
import DecoratedTitleBig from '../../shared/ui/decoratedTitleBig/decoratedTitleBig';
import Btn from '../../shared/ui/button/btn';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<DecoratedTitleBig />
				<Link to="/">Coffee house</Link>
				<Link to="/catalog">Our coffee</Link>
				<Link to="/country">For your pleasure</Link>
				<Link to="/about">About Us</Link>
			</nav>
			<div className={styles.title_header}>
				<h2>Everything You Love About Coffee</h2>
				<DecoratedTitleWhite />
				<div className={styles.title_mg}>
					<h3>We makes every day full of energy and taste</h3>
					<h3>Want to try our beans?</h3>
				</div>
			</div>
			<Btn />
		</header>
	);
};

export default Header;
