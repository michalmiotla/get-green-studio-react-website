import { Container } from '../Container/Container'
import styles from './HowToCare.module.css'
import HowToCare1 from '../../assets/photos/HowToCare1.jpg'
import HowToCare2 from '../../assets/photos/HowToCare2.jpg'
import { LoadingPhoto } from '../Loading/LoadingPhoto.jsx'
import { useEffect, useState, forwardRef } from 'react'

export const HowToCare = forwardRef(function HowToCare(props, ref) {
	const [isFirstPhotoLoaded, setIsFirstPhotoLoaded] = useState(false)
	const [isSecondPhotoLoaded, setIsSecondPhotoLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setIsFirstPhotoLoaded(true)
		}
		img.src = HowToCare1
	}, [HowToCare1])

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setIsSecondPhotoLoaded(true)
		}
		img.src = HowToCare2
	}, [HowToCare2])

	return (
		<div ref={ref} className={styles.how_to_care}>
			<Container>
				<div className={styles.main}>
					<p className={styles.title}>Dlaczego warto zadbać o ogród?</p>
					<hr className={styles.horizontal_line} />
					<div className={styles.boxes}>
						<div className={styles.box_one}>
							<div className={styles.img_box}>
								{isFirstPhotoLoaded ? (
									<div className={styles.div}>
										<img src={HowToCare1} alt='' />
									</div>
								) : (
									<LoadingPhoto />
								)}
							</div>

							<div className={styles.text_boxes}>
								<p>
									Ogrody odgrywają ważną rolę w życiu człowieka, oferując przestrzeń do relaksu oraz kontaktu z naturą.
									Stanowią wartościowy element estetyczny, poprawiając jakość życia i wprowadzając harmonię w otoczeniu.
								</p>
								<p>Roślinność wpływa pozytywnie na samopoczucie, redukując stres i poprawiając zdrowie psychiczne.</p>
							</div>
						</div>
						<hr className={styles.horizontal_line} />
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
							{/* <hr className={styles.vertical_line} /> */}
							<div className={styles.img_box}>
								{isSecondPhotoLoaded ? (
									<div className={styles.div}>
										<img src={HowToCare2} alt='' />
									</div>
								) : (
									<LoadingPhoto />
								)}
							</div>
						</div>
					</div>
					<hr className={styles.horizontal_line} />
				</div>
			</Container>
		</div>
	)
})
