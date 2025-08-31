import { Container } from '../Container/Container'
import styles from './Counter.module.css'

export function Counter() {
	return (
		<div className={styles.counter}>
			<Container>
				<div className={styles.main}>
					<div className={styles.box}>
						<p className={styles.title}>Zadowoleni klienci:</p>
						<span className={styles.number}>0</span>
					</div>
					<div className={styles.box}>
						<p className={styles.title}>Zadowoleni klienci:</p>
						<span className={styles.number}>0</span>
					</div>
					<div className={styles.box}>
						<p className={styles.title}>Zadowoleni klienci:</p>
						<span className={styles.number}>0</span>
					</div>
				</div>
			</Container>
		</div>
	)
}
