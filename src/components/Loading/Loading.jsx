import styles from './Loading.module.css'
import LOADING from '../../assets/icons/loading.png'

export function Loading() {
	return (
		<div className={styles.main}>
			<div className={styles.loader}></div>
		</div>
	)
}
