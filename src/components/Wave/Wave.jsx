import styles from './Wave.module.css'

export function Wave({ color }) {
	return <svg className={`${styles.wave} ${color === 'mainColor' ? styles.main : styles.reversed}`} />
}
