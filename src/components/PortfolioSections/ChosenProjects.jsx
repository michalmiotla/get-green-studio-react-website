import { useState } from 'react'
import { projects } from '../../projects'
import { Container } from '../Container/Container'
import { Project } from '../Project/Project'
import styles from './ChosenProjects.module.css'

export function ChosenProjects() {
	const [selectedOption, setSelectedOption] = useState('wszystko')
	const projectsArray = projects

	function FilterProjects() {
		let array

		if (selectedOption === 'ogrody') {
			array = projectsArray.filter(proj => proj.category === 'ogrody')
		} else if (selectedOption === 'konstrukcje') {
			array = projectsArray.filter(proj => proj.category === 'konstrukcje')
		} else if (selectedOption === 'wszystko') {
			array = projectsArray
		}
		return array.map(project => (
			<Project
				key={project.id}
				img={project.photos[0]}
				gallery={project.photos}
				name={project.name}
				location={project.location}
				year={project.year}
			/>
		))
	}

	return (
		<div className={styles.chosen_projects}>
			<Container>
				<div className={styles.main}>
					<h3 className={styles.title}>przejrzyj nasze wybrane projekty!</h3>
					<hr className={styles.horizontal_line} />
					<div className={styles.filter}>
						<p>filtruj:</p>
						<select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
							<option value={'wszystko'}>wszystko</option>
							<option value={'ogrody'}>ogrody</option>
							<option value={'konstrukcje'}>konstrukcje</option>
						</select>
					</div>
					<hr className={styles.horizontal_line} />
					<div className={styles.projects_box}>{FilterProjects()}</div>
				</div>
			</Container>
		</div>
	)
}
