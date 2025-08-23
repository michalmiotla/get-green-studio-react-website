import styles from './Navigation.module.css'
import { Container } from '../Container/Container'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../src/assets/logo/logo.png'

import Burger from '../../assets/icons/burger.svg'
import Close from '../../assets/icons/close.svg'

export function Navigation() {
	const [isMobileNavShown, setIsMobileNavShown] = useState(false)
	const [elementWidth, setElementWidth] = useState(window.innerWidth)

	function toggleNavigation() {
		setIsMobileNavShown(!isMobileNavShown)
	}

	function backToTop() {
		setIsMobileNavShown(false)
		window.scrollTo({ top: 0, behavior: 'smooth' })
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
		<nav className={styles.nav}>
			<Container>
				<div className={styles.navigation}>
					{isMobileNavShown === false ? (
						<>
							<div className={styles.logo_mobile}>
								<NavLink onClick={backToTop} to='/'>
									<img src={Logo} alt='get green studio logo' />
								</NavLink>
							</div>
							<div className={styles.menu}>
								<img onClick={() => toggleNavigation()} className={styles.burger} src={Burger} alt='open' />
							</div>
						</>
					) : (
						<>
							<div className={styles.logo_mobile}>
								<NavLink onClick={backToTop} to='/'>
									<img src={Logo} alt='get green studio logo' />
								</NavLink>
							</div>
							<div className={styles.menu}>
								<img onClick={() => toggleNavigation()} className={styles.close} src={Close} alt='close' />
							</div>
						</>
					)}

					<div className={styles.navbar}>
						<ul>
							<li>
								<NavLink
									onClick={() => setIsMobileNavShown(false)}
									className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.navlinks}`)}
									to='/oferta'>
									oferta
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => setIsMobileNavShown(false)}
									className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.navlinks}`)}
									to='/pakiety'>
									pakiety
								</NavLink>
							</li>
							<li>
								<div className={styles.logo}>
									<NavLink onClick={backToTop} to='/'>
										<img src={Logo} alt='get green studio logo' />
									</NavLink>
								</div>
							</li>

							<li>
								<NavLink
									onClick={() => setIsMobileNavShown(false)}
									className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.navlinks}`)}
									to='/portfolio'>
									portfolio
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => setIsMobileNavShown(false)}
									className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.navlinks}`)}
									to='/kontakt'>
									kontakt
								</NavLink>
							</li>
						</ul>
					</div>
					<div className={`${isMobileNavShown ? styles.navbar_mobile_active : styles.navbar_mobile}`}>
						<ul>
							<li>
								<NavLink
									onClick={() => setIsMobileNavShown(false)}
									className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.navlinks}`)}
									to='/oferta'>
									oferta
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => setIsMobileNavShown(false)}
									className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.navlinks}`)}
									to='/pakiety'>
									pakiety
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => setIsMobileNavShown(false)}
									className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.navlinks}`)}
									to='/portfolio'>
									portfolio
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => setIsMobileNavShown(false)}
									className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.navlinks}`)}
									to='/kontakt'>
									kontakt
								</NavLink>
							</li>
							{/* <li>
								<div className={styles.icons}>
									<Link onClick={() => setIsMobileNavShown(false)} to='https://facebook.com'>
										<img className={styles.icon} src={FBImg} alt='facebook' />
									</Link>
									<Link onClick={() => setIsMobileNavShown(false)} to='https://instagram.com'>
										<img className={styles.icon} src={IGImg} alt='instagram' />
									</Link>
								</div>
							</li> */}
						</ul>
					</div>
				</div>
			</Container>
		</nav>
	)
}

// className={`${isMobileNavShown && elementWidth < 768 && styles.navbar_mobile_active}  ${
// 							styles.navbar_mobile
// 						}`}
