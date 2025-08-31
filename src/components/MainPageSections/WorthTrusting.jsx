import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import styles from './WorthTrusting.module.css'
import slide1 from '../../assets/photos/slide1.jpg'
import slide2 from '../../assets/photos/slide2.jpg'
import slide3 from '../../assets/photos/slide3.jpg'
import { useEffect, useState } from 'react'

const slides = [slide1, slide2, slide3]

export function WorthTrusting() {
	const [imageIndex, setImageIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setImageIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1))
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className={styles.worth_trusting}>
			<Container>
				<div className={styles.main}>
					<h3 className={styles.title}>Dlaczego warto z nami współpracować?</h3>
					<hr className={styles.horizontal_line} />
					<div className={styles.box}>
						<div className={styles.description_box}>
							<p>
								Get Green to zespół pasjonatów natury. Aby dotrzeć do szerszego grona odbiorców, podjęliśmy kolejny krok
								na naszej drodze zawodowej, tworząc ten projekt.
							</p>
							<p>
								Wiedzę zdobytą na studiach łączymy z wieloletnim, praktycznym doświadczeniem zbieranym poprzez
								współpracę z klientami oraz partnerami z branży. To solidna baza do efektywnej, długofalowej współpracy.
							</p>
							<p>
								Gwarantujemy pełne zaangażowanie w każdy projekt, przemyślane, kreatywne i innowacyjne rozwiązania,
								dbałość o detale, stały kontakt i doradztwo na kolejnych etapach oraz pozytywną energię wspierającą
								realizację celów. Zapraszamy do kontaktu, aby omówić, w jaki sposób możemy wesprzeć Państwa w przemianie
								swojego terenu.
							</p>

							<Button to='/kontakt'>Skontaktuj się z nami</Button>
						</div>
						<hr className={styles.vertical_line} />
						<div className={styles.img_box}>
							<div className={styles.div}>
								{slides.map(slide => (
									<img style={{ translate: `${-100 * imageIndex}%` }} key={slide} src={slide} alt='' />
								))}
							</div>
						</div>
					</div>
					<hr className={styles.horizontal_line} />
				</div>
			</Container>
		</div>
	)
}
