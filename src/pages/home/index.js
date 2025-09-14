import React from 'react';
import styles from './home.module.scss';
import DecoratedTitle from '../../shared/ui/decoratedTitle/decoratedTitle';
import Promo from '../../widgets/promo';

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.container}>
				<h2 className={styles.title_home}>About Us</h2>
				<DecoratedTitle />
				<p className={styles.paragraph_first}>
					Extremity sweetness difficult behaviour he of. On disposal of as
					landlord horrible. Afraid at highly months do things on at. Situation
					recommend objection do intention so questions. As greatly removed
					calling pleased improve an. Last ask him cold feel met spot shy want.
					Children me laughing we prospect answered followed. At it went is song
					that held help face.
				</p>
				<p className={styles.paragraph_second}>
					Now residence dashwoods she excellent you. Shade being under his bed
					her, Much read on as draw. Blessing for ignorant exercise any yourself
					unpacked. Pleasant horrible but confined day end marriage. Eagerness
					furniture set preserved far recommend. Did even but nor are most gave
					hope. Secure active living depend son repair day ladies now.
				</p>
			</div>
			<Promo />
		</div>
	);
};

export default Home;
