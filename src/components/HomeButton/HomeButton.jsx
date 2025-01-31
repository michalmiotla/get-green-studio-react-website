import styles from './HomeButton.module.css'
import Up from '../../assets/icons/up.svg'

export function HomeButton({ backToMainMenu }) {
	return (
		<button onClick={() => backToMainMenu()} className={styles.home_button}>
			<img src={Up} alt='' />
		</button>
	)
}
