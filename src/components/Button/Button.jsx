import styles from './Button.module.css'

export function Button({ children, to }) {
	return (
		<button className={styles.button}>
			<a href={to}>{children}</a>
		</button>
	)
}
