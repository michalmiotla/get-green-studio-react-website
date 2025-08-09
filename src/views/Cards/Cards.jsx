import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import CardsBackground from '../../assets/photos/WLS10.jpg'
import { ServiceDescription } from '../../components/CardsSections/ServiceDescription'
import { ServiceDetails } from '../../components/CardsSections/ServiceDetails'

export function Cards() {
	return (
		<div>
			<ServiceDescription />
			<ServiceDetails />
			<FixedBackground
				firstDesc='Masz pytania?'
				firstLink='/kontakt'
				firstInfo='Skontaktuj się z nami'
				secondLink='/oferta'
				secondInfo='Sprawdź pełną ofertę'
				image={CardsBackground}
			/>
		</div>
	)
}
