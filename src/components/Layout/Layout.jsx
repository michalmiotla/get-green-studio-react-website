import { Outlet } from 'react-router'
import { Navigation } from '../Navigation/Navigation'
import { Footer } from '../Footer/Footer'
import { HomeButton } from '../HomeButton/HomeButton'
import { useEffect, useState } from 'react'

function Layout() {
	const [isHomeButtonShowed, setIsHomeButtonShowed] = useState(false)
	const [windowScroll, setWindowScroll] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setWindowScroll(window.scrollY)
		}

		windowScroll >= 1000 ? setIsHomeButtonShowed(true) : setIsHomeButtonShowed(false)

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [windowScroll])

	function backToMainMenu() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<Navigation />
			<Outlet />
			{isHomeButtonShowed && <HomeButton backToMainMenu={backToMainMenu} />}
			<Footer />
		</>
	)
}

export default Layout
