import { Container } from '../Container/Container'
import { Button } from '../Button/Button'

import styles from './FixedBackground.module.css'

export function FixedBackground({ image, firstDesc, firstLink, firstInfo, secondLink, secondInfo }) {
	return (
		<div className={styles.fixed_background}>
			<Container>
				<div style={{ backgroundImage: 'url(' + image + ')' }} className={styles.main}>
					<div className={styles.column}>
						<p>{firstDesc}</p>
						<Button to={firstLink}>{firstInfo}</Button>
					</div>
					<div className={styles.column}>
						<p>Chcesz więcej szczegółów?</p>
						<Button to={secondLink}>{secondInfo}</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}
