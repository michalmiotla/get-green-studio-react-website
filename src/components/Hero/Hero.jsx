import { Button } from '../Button/Button'
import styles from './Hero.module.css'
import { Container } from '../Container/Container'
import { PageDownButton } from '../PageDownButton/PageDownButton'

export function Hero() {
	function scrollDown() {
		const windowHeight = window.innerHeight
		const windowScrolled = window.scrollY

		window.scrollTo({
			top: windowScrolled + windowHeight,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<div className={styles.hero}>
				<div className={styles.gradient}></div>
				<Container>
					<div className={styles.main}>
						<h1>Twój wymarzony ogród czeka na Ciebie!</h1>
						<hr className={styles.line_one} />
						<h2>
							Get Green Studio specjalizuje się w kreatywnym kształtowaniu przestrzeni zielonych, gdzie pasja do
							przyrody łączy się z profesjonalizmem i indywidualnym podejściem do każdego projektu.
						</h2>
						<hr className={styles.line_two} />
						<Button to='/oferta'>Poznaj naszą ofertę</Button>
					</div>
				</Container>
				<PageDownButton scrollDown={scrollDown} />
			</div>
		</>
	)
}
