import styles from './GardenOfDreams.module.css'
import { Container } from '../Container/Container'
import { Button } from '../Button/Button'
import ImgThree from '../../assets/photos/WW9.png'
import ImgFour from '../../assets/photos/WW11.png'

export function GardenOfDreams() {
	return (
		<div className={styles.garden_of_dreams}>
			<Container>
				<div className={styles.main}>
					<h3 className={styles.title}>Pomożemy Ci stworzyć swój ogród marzeń!</h3>
					<p className={styles.description}>
						W Get Green Studio oferujemy tworzenie profesjonalnych wizualizacji, projektów koncepcyjnych oraz projektów
						technicznych. Pomożemy Ci także w doborze i obmiarze odpowiednich materiałów.
					</p>
					<hr className={styles.horizontal_line} />
					<div className={styles.box}>
						<div className={styles.box_one}>
							<div className={styles.div}>
								<img src={ImgThree} alt='' />
							</div>
							<Button to='/portfolio'>Zobacz nasze projekty</Button>
						</div>
						<hr className={styles.horizontal_line} />
						<hr className={styles.vertical_line} />
						<div className={styles.box_two}>
							<div className={styles.div}>
								<img src={ImgFour} alt='' />
							</div>
							<Button to='/pakiety'>Sprawdź dostępne pakiety</Button>
						</div>
					</div>
					<hr className={styles.horizontal_line} />
				</div>
			</Container>
		</div>
	)
}
