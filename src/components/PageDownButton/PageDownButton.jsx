import styles from './PageDownButton.module.css'
import Down from '../../assets/icons/down.svg'

export function PageDownButton({ scrollDown }) {
	return (
		<button onClick={() => scrollDown()} className={styles.page_down_button}>
			<img src={Down} alt='' />
		</button>
	)
}
