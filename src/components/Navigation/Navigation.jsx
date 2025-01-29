import styles from './Navigation.module.css'
import { Container } from '../Container/Container'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../src/assets/logo/logo.png'
import FBImg from '../../../src/assets/icons/facebook.svg'
import IGImg from '../../../src/assets/icons/instagram.svg'
import Burger from '../../assets/icons/burger.svg'
import Close from '../../assets/icons/close.svg'

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
						<Link to='/'>
							<img src={Logo} alt='get green studio logo' />
						</Link>
					</div>
					{isMobileNavShown === false ? (
						<div className={styles.menu}>
							<img onClick={() => toggleNavigation()} className={styles.burger} src={Burger} alt='open' />
						</div>
					) : (
						<div className={styles.menu}>
							<img onClick={() => toggleNavigation()} className={styles.close} src={Close} alt='close' />
						</div>
					)}

					<nav className={`${styles.navbar} ${isMobileNavShown && styles.navbarMobile}`}>
						<ul>
							<li>
								<NavLink className={styles.navlinks} to='/oferta'>
									oferta
								</NavLink>
							</li>
							<li>
								<NavLink className={styles.navlinks} to='/pakiety'>
									pakiety
								</NavLink>
							</li>
							<li>
								<NavLink className={styles.navlinks} to='/portfolio'>
									portfolio
								</NavLink>
							</li>
							<li>
								<NavLink className={styles.navlinks} to='/kontakt'>
									kontakt
								</NavLink>
							</li>
							<li>
								<div className={styles.icons}>
									<Link to='https://facebook.com'>
										<img className={styles.icon} src={FBImg} alt='facebook' />
									</Link>
									<Link to='https://instagram.com'>
										<img className={styles.icon} src={IGImg} alt='instagram' />
									</Link>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</div>
	)
}
