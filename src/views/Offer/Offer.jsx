import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import { CooperationPlan } from '../../components/OfferSections/CooperationPlan'
import { OfferTable } from '../../components/OfferSections/OfferTable'
import OfferBackground from '../../assets/photos/WW9.png'

export function Offer() {
	return (
		<>
			<CooperationPlan />
			<OfferTable />
			<FixedBackground image={OfferBackground} />
		</>
	)
}
