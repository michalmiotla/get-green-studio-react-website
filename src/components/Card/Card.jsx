import styles from './Card.module.css'
import ARROW_DOWN from '../../assets/icons/arrow_down.png'

export function Card({ name, areDetailsShown, setAreDetailsShown, setTitle, handleClick, image }) {
	function HandleCardDetails() {
		handleClick()
		setAreDetailsShown(true)
		setTitle(name)
	}

	return (
		<div onClick={() => HandleCardDetails()} style={{ backgroundImage: `url(${image})` }} className={styles.card}>
			<div className={styles.card_gradient}></div>
			<div className={styles.card_top}>
				<h3>{name}</h3>
				<hr />
			</div>
			<div className={styles.card_bottom}>
				<p>rozwiń szczegóły</p>
				<img src={ARROW_DOWN} alt='' />
			</div>
		</div>
	)
}
