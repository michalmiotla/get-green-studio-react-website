import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import styles from './Cards.module.css'
import CardsBackground from '../../assets/photos/WLS10.jpg'

export function Cards() {
	return (
		<div className={styles.cards}>
			Pakiety
			<FixedBackground image={CardsBackground} />
		</div>
	)
}
