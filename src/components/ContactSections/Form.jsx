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
					<form autoComplete='off' onSubmit={() => console.log('ok')}>
						<div className={styles.basic_info}>
							<div className={styles.image}>
								<img src={MENTION} alt='' />
							</div>
							<hr className={styles.horizontal_line_two} />
							<hr className={styles.vertical_line} />
							<div className={styles.basic_box}>
								{/* <span className={styles.required}>*Pole wymagane</span> */}
								<div className={styles.basic_info_box}>
									<label className={styles.bigger_label} htmlFor='name'>
										Imię:*
									</label>
									<input className={styles.basic_input} id='name' type='text' />
									<span className={styles.error}>Błędne dane</span>
								</div>
								<div className={styles.basic_info_box}>
									<label className={styles.bigger_label} htmlFor='mail'>
										Adres e-mail:*
									</label>
									<input className={styles.basic_input} id='mail' type='mail' />
									<span className={styles.error}>Błędne dane</span>
								</div>
								<div className={styles.basic_info_box}>
									<label className={styles.bigger_label} htmlFor='city'>
										Miejscowość:*
									</label>
									<input className={styles.basic_input} id='city' type='text' />
									<span className={styles.error}>Błędne dane</span>
								</div>
								<div className={styles.basic_info_box}>
									<label className={styles.bigger_label} htmlFor='area'>
										Powierzchnia działki:*
									</label>
									<input className={styles.basic_input} id='area' type='text' />
									<span className={styles.error}>Błędne dane</span>
								</div>
							</div>
						</div>
						<div className={styles.second_info}>
							<div className={styles.second_info_box}>
								<p className={styles.bigger_label}>Preferowany pakiet:</p>
								<input type='radio' name='mini' />
								<label className={styles.smaller_label} htmlFor='mini'>
									Green Mini
								</label>
								<input type='radio' name='standard' />
								<label className={styles.smaller_label} htmlFor='standard'>
									Green Standard
								</label>
								<input type='radio' name='premium' />
								<label className={styles.smaller_label} htmlFor='premium'>
									Green Premium
								</label>
							</div>
							<div className={styles.second_info_box}>
								<p className={styles.bigger_label}>Ukształtowanie terenu:</p>
								<input type='radio' name='flat' />
								<label className={styles.smaller_label} htmlFor='mini'>
									Płaski
								</label>
								<input type='radio' name='wrinkled' />
								<label className={styles.smaller_label} htmlFor='standard'>
									Pofałdowany
								</label>
								<input type='radio' name='steep' />
								<label className={styles.smaller_label} htmlFor='premium'>
									Stromy
								</label>
							</div>
						</div>
						<div className={styles.additional_info}>
							<p>Dodatkowe informacje:</p>
							<input type='text' />
							<input type='radio' name='accept' />
							<label className={styles.smaller_label} htmlFor='mini'>
								Akceptuję politykę prywatności*
							</label>
						</div>
						<button>Wyślij</button>
					</form>
				</div>
			</Container>
		</div>
	)
}
