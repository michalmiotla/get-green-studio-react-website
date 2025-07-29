import { useState } from 'react'
import styles from './Project.module.css'
import { Slider } from '../Slider/Slider'

export function Project({ img, gallery, name, location, year }) {
	const [isSliderShown, setIsSliderShown] = useState(false)

	return (
		<>
			<div className={styles.project}>
				<div onClick={() => setIsSliderShown(true)} className={styles.project_photo}>
					<img src={img} alt='' />
				</div>
				<div className={styles.project_desc}>
					<p>{name},</p>
					<p> {location},</p>
					<p>{year}</p>
				</div>
				<hr className={styles.horizontal_line} />
			</div>
			{isSliderShown && <Slider setIsSliderShown={setIsSliderShown} gallery={gallery} />}
		</>
	)
}
