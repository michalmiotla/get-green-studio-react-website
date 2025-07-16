import { Container } from '../Container/Container'
import styles from './ServiceDescription.module.css'
import Toggle from '../../assets/design/Toggle-bro.svg'

export function ServiceDescription() {
	return (
		<div className={styles.service_description}>
			<Container>
				<div className={styles.title_box}>
					<h3 className={styles.title}>wybierz plan dostosowany do swoich potrzeb!</h3>
					<hr className={styles.horizontal_line} />
				</div>
				<div className={styles.main}>
					<div className={styles.box_one}>
						<p>
							Niezależnie od wybranego pakietu, Get Green Studio gwarantuje <strong>indywidualne podejście</strong>,
							kreatywne rozwiązania i pełne zaangażowanie w każdy projekt. Oferta została zaprojektowana tak, aby
							odpowiadać na różne potrzeby i budżety klientów, zapewniając jednocześnie profesjonalne wsparcie na każdym
							etapie pracy nad zieloną przestrzenią.
						</p>
						<p>
							<strong>Pakiet Mini</strong> to idealne rozwiązanie dla osób, które potrzebują szybkiej, profesjonalnej
							porady lub wstępnej koncepcji zagospodarowania ogrodu. Obejmuje on konsultację z architektem krajobrazu,
							analizę działki oraz uproszczony szkic koncepcyjny. Dzięki niemu klienci mogą w krótkim czasie uzyskać
							klarowną wizję zmian, jakie warto wprowadzić w swojej przestrzeni zielonej.
						</p>
					</div>
					<hr className={styles.vertical_line_one} />
					<div className={styles.img_box}>
						<img src={Toggle} alt='' />
						<p>
							<strong>Poniżej więcej szczegółów:</strong>
						</p>
					</div>
					<hr className={styles.vertical_line_two} />
					<div className={styles.box_two}>
						<p>
							<strong>Pakiet Standard</strong> to kompleksowy projekt koncepcyjny ogrodu, uwzględniający potrzeby
							funkcjonalne i estetyczne właścicieli. Zawiera pełny plan zagospodarowania terenu, dobór roślin,
							propozycje nawierzchni, małej architektury i oświetlenia ogrodu. Klient otrzymuje również zestawienie
							materiałów oraz ogólne wytyczne wykonawcze.
						</p>
						<p>
							<strong>Pakiet Premium</strong> to najbardziej rozbudowana oferta, stworzona z myślą o wymagających
							klientach szukających projektu „pod klucz”. Obejmuje wszystkie elementy pakietu Standard, a dodatkowo
							szczegółowe projekty wykonawcze, wizualizacje 3D, harmonogram prac oraz nadzór autorski nad realizacją
							ogrodu.
						</p>
					</div>
				</div>
				<hr className={styles.horizontal_line} />
			</Container>
		</div>
	)
}
