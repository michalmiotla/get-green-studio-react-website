import styles from './CardDetails.module.css'
import { forwardRef } from 'react'

function CardDetails({ areDetailsShown, title }, ref) {
	function HandleDetails() {
		if (title === 'green mini') {
			return (
				<ul>
					<li>
						<p>Konsultacje + 1 poprawka koncepcji (kolejne dodatkowo płatne)</p>
					</li>
					<li>
						<p>Koncepcja 1 wersja (Układ funkcjonalny z opisami stref)</p>
					</li>
					<li>
						<p>Uproszczona inwentaryzacja roślinności (Możliwa w przypadku wizji lokalnej lub przy pomocy inwestora)</p>
					</li>
					<li>
						<p>
							Postawowy plan nasadzeń (plan nasadzeń bez doboru gatunkowego roślin, tylko z podziałem na rodzaje roślin,
							np. drzewa, krzewy) i wymiarowanie konkretnych rabat za pomocą kratki wymiarowej 1x1m - klient sam dobiera
							rośliny w dane miejsce poza projektem
						</p>
					</li>
					<li>
						<p>Układ i propozycje rozmieszczenia elementów małej architektury - wybranych przez klienta</p>
					</li>
				</ul>
			)
		} else if (title === 'green standard') {
			return (
				<ul>
					<li>
						<p>Konsultacje + 2 poprawki koncepcji (kolejne dodatkowo płatne)</p>
					</li>
					<li>
						<p>Koncepcja 1 wersja (Układ funkcjonalny z opisami stref, rzut z góry z wymiarowaniem)</p>
					</li>
					<li>
						<p>
							Szczegółowa inwentaryzacja istniejącej roślinności (Możliwa w przypadku wizji lokalnej lub przy pomocy
							inwestora)
						</p>
					</li>
					<li>
						<p>
							Projekt nasadzeń - (Plan nasadzeń, wymiarowanie rabat, dobór gatunkowy i obmiar potrzebnych roślin) - My
							dobieramy rośliny klient sprawdza czy one pasują do jego wizji
						</p>
					</li>
					<li>
						<p>Układ i propozycje rozmieszczenia elementów małej architektury - wybranych przez klienta</p>
					</li>
					<li>
						<p>
							<strong>PAKIET 4 WIZUALIZACJI (KLIENT WYBIERA MIEJSCE I KIERUNEK PATRZENIA NA WIZUALIZACJI)</strong>
						</p>
					</li>
					<li>
						<p>
							<strong>+1 PROJEKT DODATKOWY DO WYBORU</strong>
						</p>
					</li>
				</ul>
			)
		} else if (title === 'green premium') {
			return (
				<ul>
					<li>
						<p>Konsultacje + 3 poprawki koncepcji (kolejne dodatkowo płatne)</p>
					</li>
					<li>
						<p>
							Koncepcja 2 wersje (Układ funkcjonalny z opisami stref, rzut z góry z wymiarowaniem wybranej koncepcji)
						</p>
					</li>
					<li>
						<p>
							Szczegółowa inwentaryzacja istniejącej roślinności (Możliwa w przypadku wizji lokalnej lub przy pomocy
							inwestora)
						</p>
					</li>
					<li>
						<p>
							Projekt nasadzeń - (Plan nasadzeń, wymiarowanie rabat, dobór gatunkowy i obmiar potrzebnych roślin) - My
							dobieramy rośliny klient sprawdza czy one pasują do jego wizji
						</p>
					</li>
					<li>
						<p>Układ i propozycje rozmieszczenia elementów małej architektury - wybranych przez klienta</p>
					</li>
					<li>
						<p>Rozmieszczenie i dobór punktów oświetlenia</p>
					</li>
					<li>
						<p>
							<strong>
								PAKIET WIZUALIZACJI (ILOŚĆ WIZUALIZACJI DOBIERANA JEST DO WIELKOŚCI OGRODU) + SPACER PO OGRODZIE
							</strong>
						</p>
					</li>
					<li>
						<p>
							<strong>+2 PROJEKTY DODATKOWE DO WYBORU</strong>
						</p>
					</li>
				</ul>
			)
		}
	}

	return (
		<>
			<div
				ref={ref}
				className={`${styles.details} ${!areDetailsShown ? styles.details_hidden : styles.details_active}`}>
				<h3 className={styles.title}>{title}</h3>
				<hr className={styles.horizontal_line} />
				<div className={styles.description}>{HandleDetails()}</div>
			</div>
		</>
	)
}

export default forwardRef(CardDetails)
