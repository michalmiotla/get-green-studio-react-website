import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
// import { Layout } from './components/Layout/Layout'
import './global.css'
import './theme.css'
import { MainPage } from './views/MainPage/MainPage'
import { Offer } from './views/Offer/Offer'
import { Cards } from './views/Cards/Cards'
import { Contact } from './views/Contact/Contact'
import { Portfolio } from './views/Portfolio/Portfolio'
import { Loading } from './components/Loading/Loading.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

const Layout = lazy(() => import('./components/Layout/Layout.jsx'))

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path='' element={<Layout />}>
						<Route path='/' element={<MainPage />}></Route>
						<Route path='/oferta' element={<Offer />}></Route>
						<Route path='/pakiety' element={<Cards />}></Route>
						<Route path='/portfolio' element={<Portfolio />}></Route>
						<Route path='/kontakt' element={<Contact />}></Route>
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	</StrictMode>
)
