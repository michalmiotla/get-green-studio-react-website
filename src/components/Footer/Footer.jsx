import { Container } from '../Container/Container'
import styles from './footer.module.css'
import Leaf from '../../assets/design/leaf-svgrepo-com (1).svg'
import Logo from '../../assets/logo/logo.png'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<hr className={styles.horizontal_line} />
				<div className={styles.main}>
					<div className={styles.box_one}>
						<p>Get Green Studio</p>
						<p>ul. Kwiatowa 1</p>
						<p>tel. 123 456 789</p>
						<p>mail@getgreenstudio.pl</p>
					</div>
					<div className={styles.img_box}>
						<img className={styles.leaf_one} src={Leaf} alt='' />
						<img className={styles.logo} src={Logo} alt='' />
						<img className={styles.leaf_two} src={Leaf} alt='' />
					</div>
					<div className={styles.box_two}>
						<p>NIP: 1234567890</p>
						<p>Godziny otwarcia:</p>
						<p>Pn - Pt 8:00 - 16:00</p>
						<p>Sobota, niedziela - nieczynne</p>
					</div>
				</div>
				<hr className={styles.horizontal_line} />
				<p className={styles.signature}>2025 Michał Miotła</p>
			</Container>
		</footer>
	)
}
