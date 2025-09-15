import React from 'react';
import styles from './goods.module.scss';
import CupCoffee from '../../shared/assets/img/for/for-about.png';
import DecoratedTitle from '../../shared/ui/decoratedTitle/decoratedTitle';
import CatalogAabout from '../../widgets/catalog-about/catalog-about';

const Goods = () => {
	return (
		<section className={styles.container}>
			<div className={styles.goods}>
				<div className={styles.goods__wrapper}>
					<img
						className={styles.goods__photo}
						src={CupCoffee}
						alt="About our goods"
					/>
					<div className={styles.goods__wrapper_text}>
						<h3 className={styles.goods__title}>About our goods</h3>
						<DecoratedTitle />
						<div className={styles.goods__mg_text}>
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
			<CatalogAabout />
		</section>
	);
};

export default Goods;
