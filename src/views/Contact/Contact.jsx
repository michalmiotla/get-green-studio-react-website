import styles from './Contact.module.css'
import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import ContactBackground from '../../assets/photos/WW8.png'

export function Contact() {
	return (
		<div className={styles.contact}>
			Kontakt
			<FixedBackground image={ContactBackground} />
		</div>
	)
}
