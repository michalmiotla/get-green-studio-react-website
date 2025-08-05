import { Container } from '../Container/Container'
import { Button } from '../Button/Button'

import styles from './FixedBackground.module.css'

export function FixedBackground({ image }) {
	return (
		<div className={styles.fixed_background}>
			<Container>
				<div style={{ backgroundImage: 'url(' + image + ')' }} className={styles.main}>
					<div className={styles.column}>
						<p>Masz pytania?</p>
						<Button to='/kontakt'>Skontaktuj się z nami</Button>
					</div>
					<div className={styles.column}>
						<p>Chcesz więcej szczegółów?</p>
						<Button to='/pakiety'>Sprawdź dostępne pakiety</Button>
					</div>
				</div>
			</Container>
		</div>
	)
}
