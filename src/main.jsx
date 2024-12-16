import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Layout } from './components/Layout/Layout'
import './global.css'
import './theme.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
