import { Container } from '../Container/Container'
import styles from './Form.module.css'
import MENTION from '../../assets/design/Mention-bro 1.png'

export function Form() {
	return (
		<div className={styles.form}>
			<Container>
				<div className={styles.title_box}>
					<h3>kontakt</h3>
					<hr className={styles.horizontal_line_one} />
					<p>
						Możesz się skontaktować z nami telefonicznie, mailowo, lub wypełniając poniższy formularz. Gdy otrzymamy
						informację o wypełnionym i wysłanym formularzu, przygotujemy dla Ciebie odpowiednią ofertę wraz ze wstępną
						wyceną.
					</p>
				</div>
				<div className={styles.main}>
					<div className={styles.image}>
						<img src={MENTION} alt='' />
					</div>
					<hr className={styles.horizontal_line_two} />
					<hr className={styles.vertical_line} />
					<div className={styles.form_box}>
						<p className={styles.disclaimer}></p>
					</div>
				</div>
			</Container>
		</div>
	)
}
