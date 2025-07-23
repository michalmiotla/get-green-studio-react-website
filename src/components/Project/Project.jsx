import styles from './Project.module.css'

export function Project({ img, name, location, year }) {
	return (
		<div className={styles.project}>
			<div className={styles.project_photo}>
				<img src={img} alt='' />
			</div>
			<div className={styles.project_desc}>
				<p>{name},</p>
				<p> {location},</p>
				<p>{year}</p>
			</div>
			<hr className={styles.horizontal_line} />
		</div>
	)
}
