import { Container } from '../Container/Container'
import { Card } from '../Card/Card'
import styles from './ServiceDetails.module.css'
import { CardDetails } from '../CardDetails/CardDetails'
import { useState } from 'react'

export function ServiceDetails() {
	const [areDetailsShown, setAreDetailsShown] = useState(false)
	const [title, setTitle] = useState('')

	

	return (
		<div className={styles.service_details}>
			<Container>
				<div className={styles.main}>
					<Card
						areDetailsShown={areDetailsShown}
						setAreDetailsShown={setAreDetailsShown}
						name='green mini'
						setTitle={setTitle}
					/>
					<Card
						areDetailsShown={areDetailsShown}
						setAreDetailsShown={setAreDetailsShown}
						name='green standard'
						setTitle={setTitle}
					/>
					<Card
						areDetailsShown={areDetailsShown}
						setAreDetailsShown={setAreDetailsShown}
						name='green premium'
						setTitle={setTitle}
					/>
					<CardDetails areDetailsShown={areDetailsShown} title={title} />
				</div>
			</Container>
		</div>
	)
}
