import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Layout } from './components/Layout/Layout'
import './global.css'
import './theme.css'
import { MainPage } from './views/MainPage/MainPage'
import { Offer } from './views/Offer/Offer'
import { Cards } from './views/Cards/Cards'
import { Contact } from './views/Contact/Contact'
import { Portfolio } from './views/Portfolio/Portfolio'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='' element={<Layout />}>
					<Route path='/' element={<MainPage />}></Route>
					<Route path='/oferta' element={<Offer />}></Route>
					<Route path='/pakiety' element={<Cards />}></Route>
					<Route path='/portfolio' element={<Portfolio />}></Route>
					<Route path='/kontakt' element={<Contact />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
