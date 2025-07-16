import { Container } from '../Container/Container'
import { Card } from '../Card/Card'
import styles from './ServiceDetails.module.css'
import { CardDetails } from '../CardDetails/CardDetails'

export function ServiceDetails() {
	return (
		<div className={styles.service_details}>
			<Container>
				<div className={styles.main}>
					<Card title='green mini' />
					<Card title='green standard' />
					<Card title='green premium' />
					<CardDetails />
				</div>
			</Container>
		</div>
	)
}
