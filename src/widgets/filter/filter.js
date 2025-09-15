import React from 'react';
import styles from './filter.module.scss';

const Filter = () => {
	return (
		<section className={styles.filter}>
			<div className={styles.filter__wrapper}>
				<div className={styles.filter__wrapper_look}>
					<div className={styles.filter__input_block}>
						<h4 className={styles.filter__title}>Looking for</h4>
						<input
							type="text"
							className={styles['form-control']}
							placeholder="Type of coffee"
						/>
					</div>
					<div className={styles.filter__wrapper_item}>
						<h4 className={styles.filter__title}>Or filter</h4>
						<div className={styles.filter__wrapper_btn}>
							<button className={styles.filter__btn}>Brazil</button>
							<button className={styles.filter__btn}>Kenya</button>
							<button className={styles.filter__btn}>Columbia</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Filter;
