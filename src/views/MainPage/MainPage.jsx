import { Hero } from '../../components/Hero/Hero.jsx'
import { GardenOfDreams } from '../../components/MainPageSections/GardenOfDreams.jsx'
import { HowToCare } from '../../components/MainPageSections/HowToCare.jsx'
import { WorthTrusting } from '../../components/MainPageSections/WorthTrusting.jsx'

export function MainPage() {
	return (
		<>
			<Hero />
			<HowToCare />
			<GardenOfDreams />
			<WorthTrusting />
		</>
	)
}
