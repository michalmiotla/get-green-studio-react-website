import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import ContactBackground from '../../assets/photos/contactBackground.jpg'
import { Form } from '../../components/ContactSections/Form'
import { Map } from '../../components/ContactSections/Map'

export function Contact() {
	return (
		<div>
			<Form />
			<FixedBackground
				image={ContactBackground}
				firstDesc='Chcesz przejrzeć portfolio?'
				firstLink='/portfolio'
				firstInfo='Sprawdź nasze projekty'
				secondLink='/pakiety'
				secondInfo='Sprawdź dostępne pakiety'
			/>
		</div>
	)
}
