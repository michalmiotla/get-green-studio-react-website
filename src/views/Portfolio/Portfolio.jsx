import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import PortfolioBackground from '../../assets/photos/WW11.png'
import { ChosenProjects } from '../../components/PortfolioSections/ChosenProjects'

export function Portfolio() {
	return (
		<>
			<ChosenProjects />
			<FixedBackground
				image={PortfolioBackground}
				firstDesc='Masz pytania?'
				firstLink='/kontakt'
				firstInfo='Skontaktuj się z nami'
				secondLink='/oferta'
				secondInfo='Sprawdź pełną ofertę'
			/>
		</>
	)
}
