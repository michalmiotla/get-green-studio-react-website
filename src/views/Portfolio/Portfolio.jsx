import styles from './Portfolio.module.css'
import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import PortfolioBackground from '../../assets/photos/WW11.png'

export function Portfolio() {
	return (
		<div className={styles.portfolio}>
			Portfolio
			<FixedBackground image={PortfolioBackground} />
		</div>
	)
}
