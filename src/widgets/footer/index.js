import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import DecoratedTitle from '../../shared/ui/decoratedTitle/decoratedTitle';
import DecoratedTitleBig from '../../shared/ui/decoratedTitleBig/decoratedTitleBig';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<nav>
				<DecoratedTitleBig />
				<Link to="/">Coffee house</Link>
				<Link to="/catalog">Our coffee</Link>
				<Link to="/country">For your pleasure</Link>
				<Link to="/about">About Us</Link>
			</nav>
			<DecoratedTitle />
		</footer>
	);
};

export default Footer;
