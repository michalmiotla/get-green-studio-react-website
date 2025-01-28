import { Outlet } from 'react-router'
import { Navigation } from '../Navigation/Navigation'
import { MainPage } from '../../views/MainPage/MainPage'
import { Footer } from '../Footer/Footer'

export function Layout() {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	)
}
