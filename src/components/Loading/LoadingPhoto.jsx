import styles from './LoadingPhoto.module.css'

export function LoadingPhoto() {
	return (
		<div className={styles.main}>
			<div className={styles.loader}></div>
		</div>
	)
}
