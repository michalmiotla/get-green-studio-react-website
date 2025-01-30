import styles from './GardenOfDreams.module.css'
import { Container } from '../Container/Container'
import { Button } from '../Button/Button'
import { Wave } from '../Wave/Wave'
import ImgThree from '../../assets/design/Seeding-bro.svg'
import ImgFour from '../../assets/design/upcycle-bro.svg'

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
							<img src={ImgThree} alt='' />
							<Button to='/pakiety'>Sprawdź dostępne pakiety</Button>
						</div>
						<hr className={styles.horizontal_line} />
						<hr className={styles.vertical_line} />
						<div className={styles.box_two}>
							<img src={ImgFour} alt='' />
							<Button to='/portfolio'>Zobacz nasze realizacje</Button>
						</div>
					</div>
					<hr className={styles.horizontal_line} />
				</div>
			</Container>
			<Wave color='secondColor' />
		</div>
	)
}
