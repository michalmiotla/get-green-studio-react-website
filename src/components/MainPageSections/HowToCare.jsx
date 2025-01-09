import { Container } from '../Container/Container'
import styles from './HowToCare.module.css'

export function HowToCare() {
	return (
		<Container>
			<div className={styles.main}>
				<p className={styles.title}>Dlaczego warto zadbać o ogród?</p>
				<img className={styles.line} src='\src\assets\design\Line.jpg' alt='' />
				<div className={styles.boxes}>
					<div className={styles.box_one}>
						<div className={styles.img_box}>
							<img src='\src\assets\design\People taking care of plants-bro.svg' alt='' />
						</div>
						{/* <img src='\src\assets\design\Line.jpg' alt='' /> */}
						<div className={styles.text_boxes}>
							<p>
								Ogrody odgrywają ważną rolę w życiu człowieka, oferując przestrzeń do relaksu oraz kontaktu z naturą.
								Stanowią wartościowy element estetyczny, poprawiając jakość życia i wprowadzając harmonię w otoczeniu.
							</p>
							<p>Roślinność wpływa pozytywnie na samopoczucie, redukując stres i poprawiając zdrowie psychiczne.</p>
						</div>
					</div>
					{/* <img src='\src\assets\design\Line.jpg' alt='' /> */}
					<div className={styles.box_two}>
						<div className={styles.text_boxes}>
							<p>
								Odpowiedni projekt ogrodu, uwzględniający funkcjonalność, proporcje i styl, może całkowicie odmienić
								przestrzeń, tworząc miejsce, które jest zarówno piękne, jak i praktyczne.
							</p>
							<p>
								Przemyślana aranżacja roślinności, małej architektury i przestrzeni sprzyja nie tylko estetyce, ale
								także wygodzie codziennego życia.
							</p>
						</div>
						{/* <img src='\src\assets\design\Line.jpg' alt='' /> */}
						<div className={styles.img_box}>
							<img src='\src\assets\design\Spring flower-bro.svg' alt='' />
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
