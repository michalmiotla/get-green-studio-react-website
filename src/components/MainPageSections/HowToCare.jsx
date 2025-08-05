import { Container } from '../Container/Container'
import styles from './HowToCare.module.css'
import ImgOne from '../../assets/design/People taking care of plants-bro.svg'
import ImgTwo from '../../assets/design/Spring flower-bro.svg'

export function HowToCare() {
	return (
		<div className={styles.how_to_care}>
			<Container>
				<div className={styles.main}>
					<p className={styles.title}>Dlaczego warto zadbać o ogród?</p>
					<hr className={styles.horizontal_line} />
					<div className={styles.boxes}>
						<div className={styles.box_one}>
							<div className={styles.img_box}>
								<img src={ImgOne} alt='' />
							</div>
							<hr className={styles.vertical_line} />
							<div className={styles.text_boxes}>
								<p>
									Ogrody odgrywają ważną rolę w życiu człowieka, oferując <strong>przestrzeń</strong> do relaksu oraz
									kontaktu z naturą. Stanowią wartościowy element estetyczny, poprawiając jakość życia i wprowadzając{' '}
									<strong>harmonię</strong> w otoczeniu.
								</p>
								<p>
									Roślinność wpływa pozytywnie na samopoczucie, redukując stres i poprawiając{' '}
									<strong>zdrowie psychiczne</strong>.
								</p>
							</div>
						</div>
						<hr className={styles.horizontal_line} />
						<div className={styles.box_two}>
							<div className={styles.text_boxes}>
								<p>
									Odpowiedni projekt ogrodu, uwzględniający funkcjonalność, proporcje i styl, może całkowicie{' '}
									<strong>odmienić przestrzeń</strong>, tworząc miejsce, które jest zarówno piękne, jak i praktyczne.
								</p>
								<p>
									Przemyślana <strong>aranżacja</strong> roślinności, małej architektury i przestrzeni sprzyja nie tylko
									estetyce, ale także wygodzie codziennego życia.
								</p>
							</div>
							<hr className={styles.vertical_line} />
							<div className={styles.img_box}>
								<img src={ImgTwo} alt='' />
							</div>
						</div>
					</div>
					<hr className={styles.horizontal_line} />
				</div>
			</Container>
		</div>
	)
}
