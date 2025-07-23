import { useState } from 'react'
import { projects } from '../../projects'
import { Container } from '../Container/Container'
import { Project } from '../Project/Project'
import styles from './ChosenProjects.module.css'

export function ChosenProjects() {
	const [selectedOption, setSelectedOption] = useState('ogrody')
	const [projectsArray, setProjectsArray] = useState(projects)

	function FilterProjects() {
		// setProjectsArray(prevArray => [prevArray.filter(proj => proj.category === selectedOption)])
		// console.log(projectsArray)
		return projectsArray.map(project => (
			<Project
				key={project.id}
				img={project.photos[0]}
				name={project.name}
				location={project.location}
				year={project.year}
			/>
		))
	}

	console.log(projectsArray)

	return (
		<div className={styles.chosen_projects}>
			<Container>
				<div className={styles.main}>
					<h3 className={styles.title}>przejrzyj nasze wybrane projekty!</h3>
					<hr className={styles.horizontal_line} />
					<div className={styles.filter}>
						<p>filtruj:</p>
						<select>
							<option onSelect={() => setSelectedOption('wszystko')}>wszystko</option>
							<option onSelect={() => setSelectedOption('ogrody')}>ogrody</option>
							<option onSelect={() => setSelectedOption('konstrukcje')}>konstrukcje</option>
						</select>
					</div>
					<hr className={styles.horizontal_line} />
					<div className={styles.projects_box}>{FilterProjects()}</div>
				</div>
			</Container>
		</div>
	)
}
