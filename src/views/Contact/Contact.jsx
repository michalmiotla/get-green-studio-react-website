import { FixedBackground } from '../../components/FixedBackground/FixedBackground'
import ContactBackground from '../../assets/photos/WW8.png'
import { Form } from '../../components/ContactSections/Form'
import { Map } from '../../components/ContactSections/Map'

export function Contact() {
	return (
		<div>
			<Form />
			{/* <Map /> */}
			<FixedBackground image={ContactBackground} />
		</div>
	)
}
