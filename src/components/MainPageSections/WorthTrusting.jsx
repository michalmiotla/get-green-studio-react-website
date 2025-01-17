import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import styles from './WorthTrusting.module.css'

export function WorthTrusting() {
	return (
		<div className={styles.worthTrusting}>
			<Container>
				<div className={styles.main}>
					<h3 className={styles.title}>Dlaczego warto nam zaufać?</h3>
					<hr className={styles.horizontal_line} />
					<div className={styles.box}>
						<div className={styles.description_box}>
							<p>
								<strong>Green Get Studio</strong> tworzą dwie przyjaciółki - Alicja oraz Iza. Ukończyłyśmy studia
								magisterskie z Architektury Krajobrazu i postanowiłyśmy postawić kolejny krok na naszej drodze
								zawodowej, tworząc ten projekt. Uzyskana wiesza opanowana na studiach wraz z{' '}
								<strong>doświadczeniem</strong>, które zdołałyśmy już zebrać, wpółpracując z klientami oraz innymi
								firmami z branży są doskonałą bazą do dalszego wspólnego działania. <strong>Gwarantujemy</strong> pełne
								zaangażowanie w każdy projekt, wdrażanie przemyślanych rozwiązań bazujących na kreatywności i
								innowacyjności, dbałość o szczegóły i detale, stały kontakt i doradztwo w dalszych etapach oraz{' '}
								<strong>pozytywną energię!</strong>
							</p>
							<Button>Skontaktuj się z nami</Button>
						</div>
						<hr className={styles.vertical_line} />
						<div className={styles.img_box}>
							<img src='\src\assets\design\Friendship-bro.svg' alt='' />
						</div>
					</div>
					<hr className={styles.horizontal_line} />
				</div>
			</Container>
		</div>
	)
}
