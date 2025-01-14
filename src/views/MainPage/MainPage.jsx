import { Hero } from '../../components/Hero/Hero.jsx'
import { GardenOfDreams } from '../../components/MainPageSections/GardenOfDreams.jsx'
import { HowToCare } from '../../components/MainPageSections/HowToCare.jsx'

export function MainPage() {
	return (
		<>
			<Hero />
			<HowToCare />
			<GardenOfDreams />
		</>
	)
}
