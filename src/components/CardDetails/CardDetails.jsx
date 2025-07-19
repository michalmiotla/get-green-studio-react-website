import styles from './CardDetails.module.css'

export function CardDetails({ areDetailsShown, title }) {
	function HandleDetails() {
		if (title === 'green mini') {
			return (
				<ul>
					<li>
						<p>Konsultacje + 1 poprawka projektu</p>
					</li>
					<li>
						<p>
							Koncepcja w kolorze - 1 wersja (rzut z góry 2D z rozmieszczeniem i opisem stref ogrodu, oraz jego
							wybranych elementów)
						</p>
					</li>
					<li>
						<p>Uproszczona inwentaryzacja roślinności (możliwa w przypadku wizji lokalnej lub przy pomocy inwestora)</p>
					</li>
					<li>
						<p>
							Postawowy plan nasadzeń (plan nasadzeń bez doboru gatunkowego roślin, tylko z podziałem na rodzaje roślin,
							np. drzewa, krzewy) i wymiarowanie konkretnych rabat za pomocą kratki wymiarowej 1x1m - klient sam dobiera
							rośliny w dane miejsce poza projektem
						</p>
					</li>
					<li>
						<p>Układ i propozycje rozmieszczenia elementów małej architektury</p>
					</li>
				</ul>
			)
		} else if (title === 'green standard') {
			return (
				<ul>
					<li>
						<p>Konsultacje + 1 poprawka projektu</p>
					</li>
					<li>
						<p>
							Koncepcja w kolorze - 1 wersja (rzut z góry 2D z rozmieszczeniem i opisem stref ogrodu, oraz jego
							wybranych elementów)
						</p>
					</li>
					<li>
						<p>Uproszczona inwentaryzacja roślinności (możliwa w przypadku wizji lokalnej lub przy pomocy inwestora)</p>
					</li>
					<li>
						<p>
							Postawowy plan nasadzeń (plan nasadzeń bez doboru gatunkowego roślin, tylko z podziałem na rodzaje roślin,
							np. drzewa, krzewy) i wymiarowanie konkretnych rabat za pomocą kratki wymiarowej 1x1m - klient sam dobiera
							rośliny w dane miejsce poza projektem
						</p>
					</li>
					<li>
						<p>Układ i propozycje rozmieszczenia elementów małej architektury</p>
					</li>
					<li>
						<p>
							Postawowy plan nasadzeń (plan nasadzeń bez doboru gatunkowego roślin, tylko z podziałem na rodzaje roślin,
							np. drzewa, krzewy) i wymiarowanie konkretnych rabat za pomocą kratki wymiarowej 1x1m - klient sam dobiera
							rośliny w dane miejsce poza projektem
						</p>
					</li>
					<li>
						<p>Układ i propozycje rozmieszczenia elementów małej architektury</p>
					</li>
				</ul>
			)
		} else if (title === 'green premium') {
			return (
				<ul>
					<li>
						<p>Konsultacje + 1 poprawka projektu</p>
					</li>
					<li>
						<p>
							Koncepcja w kolorze - 1 wersja (rzut z góry 2D z rozmieszczeniem i opisem stref ogrodu, oraz jego
							wybranych elementów)
						</p>
					</li>
					<li>
						<p>Uproszczona inwentaryzacja roślinności (możliwa w przypadku wizji lokalnej lub przy pomocy inwestora)</p>
					</li>
					<li>
						<p>
							Postawowy plan nasadzeń (plan nasadzeń bez doboru gatunkowego roślin, tylko z podziałem na rodzaje roślin,
							np. drzewa, krzewy) i wymiarowanie konkretnych rabat za pomocą kratki wymiarowej 1x1m - klient sam dobiera
							rośliny w dane miejsce poza projektem
						</p>
					</li>
					<li>
						<p>Układ i propozycje rozmieszczenia elementów małej architektury</p>
					</li>
					<li>
						<p>Konsultacje + 1 poprawka projektu</p>
					</li>
					<li>
						<p>
							Koncepcja w kolorze - 1 wersja (rzut z góry 2D z rozmieszczeniem i opisem stref ogrodu, oraz jego
							wybranych elementów)
						</p>
					</li>
					<li>
						<p>Uproszczona inwentaryzacja roślinności (możliwa w przypadku wizji lokalnej lub przy pomocy inwestora)</p>
					</li>
					<li>
						<p>
							Postawowy plan nasadzeń (plan nasadzeń bez doboru gatunkowego roślin, tylko z podziałem na rodzaje roślin,
							np. drzewa, krzewy) i wymiarowanie konkretnych rabat za pomocą kratki wymiarowej 1x1m - klient sam dobiera
							rośliny w dane miejsce poza projektem
						</p>
					</li>
					<li>
						<p>Układ i propozycje rozmieszczenia elementów małej architektury</p>
					</li>
				</ul>
			)
		}
	}

	return (
		<>
			<div className={`${styles.details} ${!areDetailsShown ? styles.details_hidden : styles.details_active}`}>
				<h3 className={styles.title}>{title}</h3>
				<hr className={styles.horizontal_line} />
				<div className={styles.description}>{HandleDetails()}</div>
			</div>
		</>
	)
}
