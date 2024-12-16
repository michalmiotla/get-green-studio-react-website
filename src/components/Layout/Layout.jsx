import { Container } from '../Container/Container'
import { Navigation } from '../Navigation/Navigation'
import { Footer } from '../Footer/Footer'

export function Layout() {
	return (
		<>
			<Container>
				<Navigation />
				<Footer />
			</Container>
		</>
	)
}
