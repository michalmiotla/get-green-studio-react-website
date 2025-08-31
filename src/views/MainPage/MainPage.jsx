import { Hero } from '../../components/Hero/Hero.jsx'
import { Counter } from '../../components/MainPageSections/Counter.jsx'
import { GardenOfDreams } from '../../components/MainPageSections/GardenOfDreams.jsx'
import { HowToCare } from '../../components/MainPageSections/HowToCare.jsx'
import { WorthTrusting } from '../../components/MainPageSections/WorthTrusting.jsx'
import { useRef } from 'react'

export function MainPage() {
	const nextPageRef = useRef(null)

	return (
		<>
			<Hero ref={nextPageRef} />
			<HowToCare ref={nextPageRef} />
			<GardenOfDreams />
			<WorthTrusting />
			<Counter />
		</>
	)
}
