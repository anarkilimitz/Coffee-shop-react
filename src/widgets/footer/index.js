import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import DecoratedTitle from '../../shared/ui/decoratedTitle/decoratedTitle';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<nav>
				<Link to="/">Coffee house</Link>
				<Link to="/catalog">Our coffee</Link>
				<Link to="/goods">For your pleasure</Link>
				<Link to="/about">About Us</Link>
			</nav>
			<DecoratedTitle />
		</footer>
	);
};

export default Footer;
