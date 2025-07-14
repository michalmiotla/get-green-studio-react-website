import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import CardsBackground from '../../assets/photos/WLS10.jpg'
import { ServiceDescription } from '../../components/CardsSections/ServiceDescription'
import { ServiceDetails } from '../../components/CardsSections/ServiceDetails'

export function Cards() {
	return (
		<div>
			<ServiceDescription />
			<ServiceDetails />
			<FixedBackground image={CardsBackground} />
		</div>
	)
}
