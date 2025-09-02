import { Container } from '../Container/Container'
import styles from './Counter.module.css'
import { opinions } from '../../opinions'
import { useEffect, useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

function Number({ n }) {
	const { number } = useSpring({
		from: { number: 0 },
		number: n,
		delay: 200,
		config: { mass: 1, tension: 20, friction: 10 },
	})
	return <animated.div className={styles.number}>{number.to(n => n.toFixed(0))}</animated.div>
}

export function Counter() {
	const [index, setIndex] = useState(0)
	const [isElementObserved, setIsElementObserved] = useState()

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev === opinions.length - 1 ? 0 : prev + 1))
		}, 10000)
		return () => clearInterval(interval)
	}, [])

	const counterRef = useRef()

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			const entry = entries[0]
			setIsElementObserved(entry.isIntersecting)
		})
		observer.observe(counterRef.current)
	}, [])

	return (
		<div className={styles.counter}>
			<Container>
				<hr className={styles.horizontal_line} />
				<div ref={counterRef} className={styles.main}>
					<div className={styles.box}>
						{isElementObserved && <Number n={4} />}
						<p className={styles.title}>Lata</p>
						<p className={styles.title}>doświadczenia</p>
					</div>
					<div className={styles.box}>
						{isElementObserved && <Number n={75} />}
						<p className={styles.title}>Wykonanych</p>
						<p className={styles.title}>projektów</p>
					</div>
					<hr className={styles.vertical_line} />

					<div className={styles.opinions}>
						<p className={styles.content}>{opinions[index].content}</p>
						<p className={styles.name}>{opinions[index].name}</p>
					</div>
				</div>
				<hr className={styles.horizontal_line} />
			</Container>
		</div>
	)
}
