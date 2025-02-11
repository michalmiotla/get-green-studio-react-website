import { Container } from '../Container/Container'
import styles from './OfferTable.module.css'
import OkSvg from '../../assets/icons/ok.svg'

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
							<th>Wizualizacje</th>
							<th>Projekt koncepcyjny</th>
							<th>Projekt wymiarowy</th>
							<th>Dobór i obmiar materiałów</th>
						</tr>
						<tr>
							<th>Ogólny rzut ogrodu</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>Nasadzenia</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>Ogrodzenia</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>Tarasy/balkony</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>Nawierzchnie</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>Oświetlenie</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>Zielone ściany</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>Zbiorniki wodne</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>Elewacje budynków</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
						<tr>
							<th>Place zabaw</th>
							<td data-cell='visualizations'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='concept'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='measurement'>
								<img src={OkSvg} alt='ok' />
							</td>
							<td data-cell='materials'>
								<img src={OkSvg} alt='ok' />
							</td>
						</tr>
					</table>
					<h3 className={styles.title}>Usługi dodatkowe</h3>
					<hr className={styles.horizontal_line} />
					<ul>
						<li>Filmy ze “spaceru” po ogrodzie (do 30 sekund)</li>
						<li>Modele 3D budynków, konstrukcji, produktów, terenu i małej architektury</li>
						<li>Projekty elementów otoczenia (produktów, małej architektury, konstrukcji)</li>
						<li>Wizualizacje produktów, konstrukcji, pomieszczeń, zagospodarowania terenów i zieleni</li>
					</ul>
				</div>
			</Container>
		</div>
	)
}
