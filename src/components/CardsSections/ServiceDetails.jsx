import { Container } from '../Container/Container'
import { Card } from '../Card/Card'
import CardDetails from '../CardDetails/CardDetails.jsx'
import styles from './ServiceDetails.module.css'
import { useRef, useState } from 'react'
import CARD_ONE from '../../assets/photos/WPR5-min.jpg'
import CARD_TWO from '../../assets/photos/WPR9-min.jpg'
import CARD_THREE from '../../assets/photos/WW8-min.png'

export function ServiceDetails() {
	const [areDetailsShown, setAreDetailsShown] = useState(false)
	const [title, setTitle] = useState('')

	const ref = useRef(null)
	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}

	return (
		<div className={styles.service_details}>
			<Container>
				<div className={styles.main}>
					<Card
						areDetailsShown={areDetailsShown}
						setAreDetailsShown={setAreDetailsShown}
						name='green mini'
						setTitle={setTitle}
						handleClick={handleClick}
						image={CARD_ONE}
					/>
					<Card
						areDetailsShown={areDetailsShown}
						setAreDetailsShown={setAreDetailsShown}
						name='green standard'
						setTitle={setTitle}
						handleClick={handleClick}
						image={CARD_TWO}
					/>
					<Card
						areDetailsShown={areDetailsShown}
						setAreDetailsShown={setAreDetailsShown}
						name='green premium'
						setTitle={setTitle}
						handleClick={handleClick}
						image={CARD_THREE}
					/>
					<CardDetails ref={ref} areDetailsShown={areDetailsShown} title={title} />
				</div>
			</Container>
		</div>
	)
}
