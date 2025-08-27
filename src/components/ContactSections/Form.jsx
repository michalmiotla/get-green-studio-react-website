import { Container } from '../Container/Container'
import styles from './Form.module.css'
import contact from '../../assets/photos/contact.jpg'
import { useEffect, useState } from 'react'
import { LoadingPhoto } from '../Loading/LoadingPhoto.jsx'
export function Form() {
	const [isPhotoLoaded, setIsPhotoLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setIsPhotoLoaded(true)
		}
		img.src = contact
	}, [contact])

	return (
		<div className={styles.form}>
			<Container>
				<div className={styles.title_box}>
					<h3>kontakt</h3>
					<hr className={styles.horizontal_line_one} />
					<p>
						Możesz się skontaktować z nami <strong>telefonicznie</strong>, <strong>mailowo</strong>, lub wypełniając
						poniższy <strong>formularz</strong>. Gdy otrzymamy informację o wypełnionym i wysłanym formularzu,
						przygotujemy dla Ciebie odpowiednią ofertę wraz ze wstępną wyceną.
					</p>
				</div>
				<div className={styles.main}>
					<form autoComplete='off' onSubmit={() => console.log('ok')}>
						<div className={styles.basic_info}>
							<div className={styles.image}>
								{isPhotoLoaded ? (
									<div className={styles.div}>
										<img src={contact} alt='' />
									</div>
								) : (
									<LoadingPhoto />
								)}
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
								<p className={styles.bigger_label}>Preferowany pakiet "Green":</p>
								<div>
									<input type='radio' id='mini' />
									<label className={styles.smaller_label} htmlFor='mini'>
										Mini
									</label>
								</div>
								<div>
									<input type='radio' id='standard' />
									<label className={styles.smaller_label} htmlFor='standard'>
										Standard
									</label>
								</div>
								<div>
									<input type='radio' id='premium' />
									<label className={styles.smaller_label} htmlFor='premium'>
										Premium
									</label>
								</div>
							</div>
							<div className={styles.second_info_box}>
								<p className={styles.bigger_label}>Ukształtowanie terenu:</p>
								<div>
									<input type='radio' id='flat' />
									<label className={styles.smaller_label} htmlFor='flat'>
										Płaski
									</label>
								</div>
								<div>
									<input type='radio' id='wrinkled' />
									<label className={styles.smaller_label} htmlFor='wrinkled'>
										Falisty
									</label>
								</div>
								<div>
									<input type='radio' id='steep' />
									<label className={styles.smaller_label} htmlFor='steep'>
										Stromy
									</label>
								</div>
							</div>
						</div>
						<div className={styles.additional_info}>
							<p className={styles.bigger_label}>Dodatkowe informacje:</p>
							<textarea name='' id=''></textarea>
							<div>
								<input type='radio' id='accept' />
								<label className={styles.smaller_label} htmlFor='accept'>
									Akceptuję politykę prywatności*
								</label>
							</div>
						</div>
						<button>Wyślij</button>
					</form>
				</div>
			</Container>
		</div>
	)
}
