import { Container } from '../Container/Container'
import styles from './footer.module.css'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<hr className={styles.horizontal_line} />
				<div className={styles.main}>
					<div>
						<p>Get Green Studio</p>
						<p>ul. Kwiatowa 1</p>
						<p>tel. 123 456 789</p>
						<p>mail@getgreenstudio.pl</p>
					</div>
					<div>
						<img src='\src\assets\design\leaf-svgrepo-com (1).svg' alt='' />
						<img src='\src\assets\logo\logo.png' alt='' />
						<img src='\src\assets\design\leaf-svgrepo-com (1).svg' alt='' />
					</div>
					<div>
						<p>NIP: 1234567890</p>
						<p>Godziny otwarcia:</p>
						<p>Pn - Pt 8:00 - 16:00</p>
						<p>Sobota, niedziela - nieczynne</p>
					</div>
				</div>
				<hr className={styles.horizontal_line} />
				<p>2025 Michał Miotła</p>
			</Container>
		</footer>
	)
}
