import styles from './CooperationPlan.module.css'
import { Container } from '../Container/Container.jsx'
import Woman from '../../assets/design/Woman thinking-bro.svg'
import { useEffect, useState } from 'react'
import { LoadingPhoto } from '../Loading/LoadingPhoto.jsx'

export function CooperationPlan() {
	const [isPhotoLoaded, setIsPhotoLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setIsPhotoLoaded(true)
		}
		img.src = Woman
	}, [Woman])

	return (
		<div className={styles.cooperation_plan}>
			<Container>
				<hr className={styles.horizontal_line} />
				<div className={styles.main}>
					<div className={styles.img_box}>
						<h3 className={styles.title}>Get Green Studio pomoże Ci z projektem ogrodu od A do Z!</h3>
						<hr className={styles.horizontal_line} />
						{isPhotoLoaded ? <img src={Woman} alt='' /> : <LoadingPhoto />}
					</div>
					<div className={styles.description_box}>
						<p>
							Współpraca z Get Green Studio zaczyna się od <strong>konsultacji</strong>, nakreślenia oczekiwań i
							stworzenia kolorowej koncepcji zagospodarowania całego projektowanego otoczenia. Koncepcje pozwalają
							zobaczyć, jakie funkcje będzie posiadał ogród w danym fragmencie, co daje Państwu <strong>pewność</strong>{' '}
							co do wyboru odpowiednich rozwiązań do dalszej pracy.
						</p>
						<p>
							Następnie, na podstawie uzgodnionych informacji i wybranej koncepcji powstają{' '}
							<strong>wizualizacje 3D</strong> przyszłego ogrodu, które stanowią z poprzednimi informacjami{' '}
							<strong>kompleksowy plan</strong> i podstawę do dalszej pracy z innymi elementami projektu przestrzeni.
						</p>
						<p>
							Dodatkowo, biuro oferuje opracowanie <strong>projektów technicznych</strong>, które zawierają informacje
							na temat zastosowanych materiałów i ich ilości, a także układu i wymiarowania w wybranych przez klienta
							projektów.
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
