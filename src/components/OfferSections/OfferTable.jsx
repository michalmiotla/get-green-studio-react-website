import { Container } from '../Container/Container'
import styles from './OfferTable.module.css'
import OkSvg from '../../assets/icons/ok.svg'
import XSvg from '../../assets/icons/close.svg'
import { Wave } from '../Wave/Wave'

export function OfferTable() {
	return (
		<div className={styles.offer_table}>
			<Container>
				<div className={styles.main}>
					<h3 className={styles.title}>Oferta projektowa</h3>
					<hr className={styles.horizontal_line} />
					<table className={styles.table}>
						<tr>
							<th></th>
							<th>
								<p>Wizualizacje</p>
							</th>
							<th>
								<p>Projekt koncepcyjny</p>
							</th>
							<th>
								<p>Projekt wymiarowy</p>
							</th>
							<th>
								<p>Dobór i obmiar materiałów</p>
							</th>
						</tr>
						<tr>
							<th>
								{' '}
								<p>Ogólny rzut ogrodu</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={XSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={XSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>
								<p>Nasadzenia</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>
								<p>Ogrodzenia</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>
								<p>Tarasy / balkony</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>
								<p>Nawierzchnie</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>
								<p>Oświetlenie</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={XSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>
								<p>Zielone ściany</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>
								<p>Zbiorniki wodne</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={XSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={XSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>
								<p>Elewacje budynków</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={XSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>
								<p>Place zabaw</p>
							</th>
							<td data-cell='Wizualizacje'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt koncepcyjny'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Projekt wymiarowy'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='Dobór i obmiar materiałów'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
					</table>
					<h3 className={styles.title}>Usługi dodatkowe</h3>
					<hr className={styles.horizontal_line} />
					<ul className={styles.additional_list}>
						<li>- Filmy ze “spaceru” po ogrodzie (do 30 sekund)</li>
						<li>- Modele 3D budynków, konstrukcji, produktów, terenu i małej architektury</li>
						<li>- Projekty elementów otoczenia (produktów, małej architektury, konstrukcji)</li>
						<li>- Wizualizacje produktów, konstrukcji, pomieszczeń, zagospodarowania terenów i zieleni</li>
					</ul>
				</div>
			</Container>
			<Wave color='mainColor' />
		</div>
	)
}
