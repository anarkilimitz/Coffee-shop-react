import React from 'react';
import styles from './country.module.scss';
import ourAbout from '../../shared/assets/img/our/our-about.jpg';
import DecoratedTitle from '../../shared/ui/decoratedTitle/decoratedTitle';

const Country = () => {
	return (
		<section className={styles.container}>
			<div className={styles.country}>
				<div className={styles.country__wrapper}>
					<img
						className={styles.country__photo}
						src={ourAbout}
						alt="About our beans"
					/>
					<div className={styles.country__wrapper_text}>
						<h3 className={styles.country__title}>About it</h3>
						<DecoratedTitle />
						<div className={styles.country__mg_text}>
							<p>
								<span>Country:</span> Brasil
							</p>
							<p>
								<span>Description:</span> Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat.
							</p>
							<p>
								Price: <span>16.99$</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Country;
