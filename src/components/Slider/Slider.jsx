import styles from './Slider.module.css'
import CLOSE from '../../assets/icons/close.svg'

import DOWN from '../../assets/icons/down.svg'
import { useState } from 'react'
export function Slider({ gallery, setIsSliderShown }) {
	const [slide, setSlide] = useState(0)

	const nextSlide = () => {
		setSlide(slide === gallery.length - 1 ? 0 : slide + 1)
	}

	const prevSlide = () => {
		setSlide(slide === 0 ? gallery.length - 1 : slide - 1)
	}

	return (
		<div className={styles.slider}>
			<div className={styles.main}>
				<img onClick={nextSlide} className={styles.up} src={DOWN} alt='' />
				<img onClick={prevSlide} className={styles.down} src={DOWN} alt='' />
				<div className={styles.images_box}>
					<img className={styles.image} src={gallery[slide]} alt='' />
					<img onClick={() => setIsSliderShown(false)} className={styles.close} src={CLOSE} alt='' />
				</div>
			</div>
		</div>
	)
}
