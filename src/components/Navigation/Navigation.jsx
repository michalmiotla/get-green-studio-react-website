import styles from './Navigation.module.css'
import { Container } from '../Container/Container'
import { useState } from 'react'

export function Navigation() {
	const [isMobileNavShown, setIsMobileNavShown] = useState(false)

	function showNavigation() {
		setIsMobileNavShown(true)
	}

	function hideNavigation() {
		setIsMobileNavShown(false)
	}

	console.log(window.innerWidth)

	return (
		<Container>
			<div className={styles.navigation}>
				<div className={styles.logo}>
					<a href='/'>
						<img src='\src\assets\logo\logo.png' alt='get green studio logo' />
					</a>
				</div>
				{isMobileNavShown === false ? (
					<img onClick={() => showNavigation()} className={styles.burger} src='\src\assets\icons\burger.svg' alt='' />
				) : (
					<img onClick={() => hideNavigation()} className={styles.close} src='\src\assets\icons\close.svg' alt='' />
				)}

				{isMobileNavShown && (
					<nav className={styles.navbar}>
						<ul>
							<li>
								<a className={styles.navlinks} href='/oferta'>
									oferta
								</a>
							</li>
							<li>
								<a className={styles.navlinks} href='/pakiety'>
									pakiety
								</a>
							</li>
							<li>
								<a className={styles.navlinks} href='/portfolio'>
									portfolio
								</a>
							</li>
							<li>
								<a className={styles.navlinks} href='/contact'>
									kontakt
								</a>
							</li>
							<li>
								<div className={styles.icons}>
									<a href='https://facebook.com'>
										<img className={styles.icon} src='/src/assets/icons/facebook.svg' alt='facebook' />
									</a>
									<a href='https://instagram.com'>
										<img className={styles.icon} src='/src/assets/icons/instagram.svg' alt='instagram' />
									</a>
								</div>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</Container>
	)
}
