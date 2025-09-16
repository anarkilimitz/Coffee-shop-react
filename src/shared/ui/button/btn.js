import React from 'react';
import { Link } from 'react-router-dom';
import styles from './btn.module.scss';

const Btn = () => {
	return (
		<Link to="/about" className={styles.btn}>
			More
		</Link>
	);
};

export default Btn;
