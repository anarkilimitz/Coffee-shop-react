// src/pages/about/about.js
import React from 'react';
import styles from './about.module.scss';
import ourBeansImage from '../../shared/assets/img/our/our.png';
import DecoratedTitle from '../../shared/ui/decoratedTitle/decoratedTitle';

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<div className={styles.about__wrapper}>
					<img
						className={styles.about__photo}
						src={ourBeansImage}
						alt="About our beans"
					/>
					<div className={styles.about__wrapper_text}>
						<h3 className={styles.about__title}>About our beans</h3>
						<DecoratedTitle />
						<div className={styles.about__mg_text}>
							<p>
								Extremity sweetness difficult behaviour he of. On disposal of as
								landlord horrible.
							</p>
							<p>
								Afraid at highly months do things on at. Situation recommend
								objection do intention so questions.
							</p>
							<p>
								As greatly removed calling pleased improve an. Last ask him cold
								feel met spot shy want. Children me laughing we prospect
								answered followed. At it went is song that held help face.
							</p>
						</div>
					</div>
				</div>
			</div>
			<span className={styles.line}></span>
		</div>
	);
};

export default About;
