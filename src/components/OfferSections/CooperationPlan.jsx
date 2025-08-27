import styles from './CooperationPlan.module.css'
import { Container } from '../Container/Container.jsx'
import offer1 from '../../assets/photos/offer1.jpg'
import { useEffect, useState } from 'react'
import { LoadingPhoto } from '../Loading/LoadingPhoto.jsx'

export function CooperationPlan() {
	const [isPhotoLoaded, setIsPhotoLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setIsPhotoLoaded(true)
		}
		img.src = offer1
	}, [offer1])

	return (
		<div className={styles.cooperation_plan}>
			<Container>
				<hr className={styles.horizontal_line} />
				<div className={styles.main}>
					<div className={styles.img_box}>
						<h3 className={styles.title}>Get Green pomoże Ci z projektem ogrodu od A do Z!</h3>
						<hr className={styles.horizontal_line} />
						{isPhotoLoaded ? (
							<div className={styles.div}>
								<img src={offer1} alt='' />
							</div>
						) : (
							<LoadingPhoto />
						)}
					</div>
					<div className={styles.description_box}>
						<p>
							W Get Green proces współpracy zaczyna się od wnikliwej konsultacji, podczas której precyzyjnie osadzone są
							Państwa oczekiwania oraz wytyczone cele inwestycji. Na podstawie rozmowy opracowujemy spójną, kolorową
							koncepcję zagospodarowania całego projektowanego otoczenia, ukazując funkcje poszczególnych fragmentów
							ogrodu i dostarczając przekonujących, faktycznych podstaw do podjęcia decyzji dotyczących dalszych
							rozwiązań
						</p>
						<p>
							Kolejnym krokiem są wizualizacje 3D przyszłego ogrodu, wykonywane w oparciu o uzgodnione informacje i
							wybraną koncepcję. Realistyczne obrazy stanowią kompleksowy plan, łączący założenia koncepcyjne z
							praktycznymi wytycznymi i stanowią klarowną bazę dla prac z innymi elementami projektu przestrzeni.
						</p>
						<p>
							Dodatkowo oferujemy opracowanie projektów technicznych, które zawierają szczegółowe informacje na temat
							zastosowanych materiałów i ich ilości, a także precyzyjny układ i wymiarowanie wybranych rozwiązań. Dzięki
							temu dokumentacja jest przejrzysta, realizacja projektu przebiega płynnie, a koszty są lepiej
							kontrolowane.
						</p>
						<p>
							{' '}
							<strong>Poniżej więcej szczegółów:</strong>{' '}
						</p>
					</div>
				</div>
			</Container>
		</div>
	)
}
