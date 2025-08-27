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
						<h1>
							Twój wymarzony ogród <br /> <span>czeka na Ciebie!</span>
						</h1>
						<hr className={styles.line_one} />
						<h2>
							Get Green to zespół specjalizujący się w projektowaniu terenów zielonych oraz ich elementów, który łączy pasję do przyrody z profesjonalizmem i indywidualnym podejściem, zapewniając unikalne rozwiązania dopasowane do potrzeb klienta.
						</h2>
						<hr className={styles.line_two} />
						<div>
							<Button className={styles.button} to='/oferta'>
								Poznaj naszą ofertę
							</Button>
						</div>
					</div>
				</Container>
				<PageDownButton scrollDown={scrollDown} />
			</div>
		</>
	)
}
