import styles from './GardenOfDreams.module.css'
import { Container } from '../Container/Container'
import { Button } from '../Button/Button'
import GardenOfDreams1 from '../../assets/photos/GardenOfDreams1.jpg'
import GardenOfDreams2 from '../../assets/photos/GardenOfDreams2.jpg'
import { useEffect, useState } from 'react'
import { LoadingPhoto } from '../Loading/LoadingPhoto'

export function GardenOfDreams() {
	const [isFirstPhotoLoaded, setIsFirstPhotoLoaded] = useState(false)
	const [isSecondPhotoLoaded, setIsSecondPhotoLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setIsFirstPhotoLoaded(true)
		}
		img.src = GardenOfDreams1
	}, [GardenOfDreams1])

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setIsSecondPhotoLoaded(true)
		}
		img.src = GardenOfDreams2
	}, [GardenOfDreams2])

	return (
		<div className={styles.garden_of_dreams}>
			<Container>
				<div className={styles.main}>
					<h3 className={styles.title}>Pomożemy Ci stworzyć przestrzeń Twoich marzeń!</h3>
					<p className={styles.description}>
						W Get Green Studio oferujemy tworzenie profesjonalnych wizualizacji, projektów koncepcyjnych oraz projektów
						technicznych. Pomożemy Ci także w doborze i obmiarze odpowiednich materiałów.
					</p>
					<hr className={styles.horizontal_line} />
					<div className={styles.box}>
						<div className={styles.box_one}>
							{isFirstPhotoLoaded ? (
								<div className={styles.div}>
									<img src={GardenOfDreams1} alt='' />
								</div>
							) : (
								<LoadingPhoto />
							)}
							<Button to='/portfolio'>Zobacz nasze projekty</Button>
						</div>
						<hr className={styles.horizontal_line} />
						<hr className={styles.vertical_line} />
						<div className={styles.box_two}>
							{isFirstPhotoLoaded ? (
								<div className={styles.div}>
									<img src={GardenOfDreams2} alt='' />
								</div>
							) : (
								<LoadingPhoto />
							)}
							<Button to='/pakiety'>Sprawdź dostępne pakiety</Button>
						</div>
					</div>
					<hr className={styles.horizontal_line} />
				</div>
			</Container>
		</div>
	)
}
