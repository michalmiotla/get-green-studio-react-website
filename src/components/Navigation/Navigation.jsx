import styles from './Navigation.module.css'
import { Container } from '../Container/Container'
import { useEffect, useState } from 'react'

export function Navigation() {
	const [isMobileNavShown, setIsMobileNavShown] = useState(false)
	const [elementWidth, setElementWidth] = useState(window.innerWidth)

	function toggleNavigation() {
		setIsMobileNavShown(!isMobileNavShown)
	}

	useEffect(() => {
		const handleResize = () => {
			setElementWidth(window.innerWidth)
		}

		elementWidth > 768 && setIsMobileNavShown(false)

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [elementWidth])

	return (
		<div className={styles.nav}>
			<Container>
				<div className={styles.navigation}>
					<div className={styles.logo}>
						<a href='/'>
							<img src='\src\assets\logo\logo.png' alt='get green studio logo' />
						</a>
					</div>
					{isMobileNavShown === false ? (
						<div className={styles.menu}>
							<img
								onClick={() => toggleNavigation()}
								className={styles.burger}
								src='\src\assets\icons\burger.svg'
								alt='open'
							/>
						</div>
					) : (
						<div className={styles.menu}>
							<img
								onClick={() => toggleNavigation()}
								className={styles.close}
								src='\src\assets\icons\close.svg'
								alt='close'
							/>
						</div>
					)}

					<nav className={`${styles.navbar} ${isMobileNavShown && styles.navbarMobile}`}>
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
				</div>
			</Container>
		</div>
	)
}
