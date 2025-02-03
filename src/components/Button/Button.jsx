import styles from './Button.module.css'
import { NavLink } from 'react-router-dom'

export function Button({ children, to }) {
	return (
		<button className={styles.button}>
			<NavLink to={to}>{children}</NavLink>
		</button>
	)
}
