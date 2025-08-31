import { Container } from '../Container/Container'
import styles from './footer.module.css'
import Logo from '../../assets/logo/logo.png'
import FBImg from '../../../src/assets/icons/facebook.svg'
import IGImg from '../../../src/assets/icons/instagram.svg'
import { Link } from 'react-router'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<hr className={styles.horizontal_line} />
				<div className={styles.main}>
					<div className={styles.info}>
						<div className={styles.box_one}>
							<p>Get Green Alicja Janiszewska</p>
							<p>ul. Towarowa 3</p>
							<p>20-205 Lublin</p>
							<p>kontakt@getgreenstudio.pl</p>
						</div>
						<div className={styles.icons}>
							<Link to='https://facebook.com'>
								<img className={styles.icon} src={FBImg} alt='facebook' />
							</Link>
							<Link to='https://instagram.com'>
								<img className={styles.icon} src={IGImg} alt='instagram' />
							</Link>
						</div>

						<div className={styles.box_two}>
							<p>Godziny otwarcia: Pn - Pt 8:00 - 16:00</p>
							<p>Sobota i niedziela - możliwe doradztwo po wcześniejszym umówieniu terminu (10:00 - 14:00)</p>
						</div>
					</div>
					<div className={styles.img_box}>
						<img className={styles.logo} src={Logo} alt='' />
					</div>
				</div>
				<hr className={styles.horizontal_line} />
				<p className={styles.signature}>2025 Michał Miotła</p>
			</Container>
		</footer>
	)
}
