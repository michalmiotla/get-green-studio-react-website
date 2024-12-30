import { Button } from '../Button/Button'
import styles from './Hero.module.css'
import { Container } from '../Container/Container'

export function Hero() {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.gradient}></div>
				<Container>
					<div className={styles.main}>
						<h1>Twój wymarzony ogród czeka na Ciebie!</h1>
						<img className={styles.lineOne} src='\src\assets\design\Line.jpg' alt='' />
						<h2>
							Get Green Studio specjalizuje się w kreatywnym kształtowaniu przestrzeni zielonych, gdzie pasja do
							przyrody łączy się z profesjonalizmem i indywidualnym podejściem do każdego projektu.
						</h2>
						<img className={styles.lineTwo} src='\src\assets\design\Line.jpg' alt='' />
						<Button>Poznaj naszą ofertę</Button>
					</div>
				</Container>
			</div>
		</>
	)
}
