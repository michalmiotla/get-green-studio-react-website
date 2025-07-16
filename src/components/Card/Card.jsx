import styles from './Card.module.css'
import ARROW_DOWN from '../../assets/icons/arrow_down.png'

export function Card({ title }) {
	return (
		<div className={styles.card}>
			<div className={styles.card_gradient}></div>
			<div className={styles.card_top}>
				<h3>{title}</h3>
				<hr />
			</div>
			<div className={styles.card_bottom}>
				<p>rozwiń szczegóły</p>
				<img src={ARROW_DOWN} alt='' />
			</div>
		</div>
	)
}
