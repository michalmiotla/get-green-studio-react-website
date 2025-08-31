import styles from './PageDownButton.module.css'
import Down from '../../assets/icons/down.svg'
import { forwardRef } from 'react'

export const PageDownButton = forwardRef(function PageDownButton(props, ref) {
	return (
		<button onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })} className={styles.page_down_button}>
			<img src={Down} alt='' />
		</button>
	)
})
