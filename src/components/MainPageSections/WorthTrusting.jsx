import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import styles from './WorthTrusting.module.css'
import ImgFive from '../../assets/photos/WPR5-min.jpg'

export function WorthTrusting() {
	return (
		<div className={styles.worth_trusting}>
			<Container>
				<div className={styles.main}>
					<h3 className={styles.title}>Dlaczego warto nam zaufać?</h3>
					<hr className={styles.horizontal_line} />
					<div className={styles.box}>
						<div className={styles.description_box}>
							<p>
								Get Green to zespół pasjonatów natury. Aby dotrzeć do szerszego grona odbiorców, podjęliśmy kolejny krok
								na naszej drodze zawodowej, tworząc ten projekt. Wiedzę zdobytą na studiach łączymy z wieloletnim,
								praktycznym doświadczeniem zbieranym poprzez współpracę z klientami oraz partnerami z branży. To solidna
								baza do efektywnej, długofalowej współpracy. Gwarantujemy pełne zaangażowanie w każdy projekt,
								przemyślane, kreatywne i innowacyjne rozwiązania, dbałość o detale, stały kontakt i doradztwo na
								kolejnych etapach oraz pozytywną energię wspierającą realizację celów. Zapraszamy do kontaktu, aby
								omówić, w jaki sposób możemy wesprzeć Państwa w przemianie swojego terenu.
							</p>
							<Button to='/kontakt'>Skontaktuj się z nami</Button>
						</div>
						<hr className={styles.vertical_line} />
						<div className={styles.img_box}>
							<div className={styles.div}>
								<img src={ImgFive} alt='' />
							</div>
						</div>
					</div>
					<hr className={styles.horizontal_line} />
				</div>
			</Container>
		</div>
	)
}
