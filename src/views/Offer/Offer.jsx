import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import { CooperationPlan } from '../../components/OfferSections/CooperationPlan'
import { OfferTable } from '../../components/OfferSections/OfferTable'
import OfferBackground from '../../assets/photos/transitionOffer.jpg'

export function Offer() {
	return (
		<>
			<CooperationPlan />
			<OfferTable />
			<FixedBackground
				image={OfferBackground}
				firstDesc='Masz pytania?'
				firstLink='/kontakt'
				firstInfo='Skontaktuj się z nami'
				secondLink='/pakiety'
				secondInfo='Sprawdź dostępne pakiety'
			/>
		</>
	)
}
