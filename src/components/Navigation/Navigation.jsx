import styles from './Navigation.module.css'

export function Navigation() {
	return (
		<div className={styles.navigation}>
			<div className={styles.logo}>
				<a href='/'>
					<img src='\src\assets\logo\logo.png' alt='get green studio logo' />
				</a>
			</div>
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
					<div>
						<a href='https://facebook.com'>
							<img className={styles.icon} src='/src/assets/icons/facebook.svg' alt='facebook' />
						</a>
						<a href='https://instagram.com'>
							<img className={styles.icon} src='/src/assets/icons/instagram.svg' alt='instagram' />
						</a>
					</div>
				</ul>
			</nav>
		</div>
	)
}
