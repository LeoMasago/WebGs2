import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Contato from './pages/Contato.jsx'
import Home from './pages/Home.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Sobre from './pages/Sobre.jsx'
import Infos from './pages/Infos.jsx'
import InfoList from './pages/InfoList.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/informacoes', element: <InfoList /> },
      { path: '/informacoes/:id', element: <Infos /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/genre/:id', element: <MoviesByGenrePage /> },
      { path: '/contato', element: <Contato /> },
      { path: '*', element: <PageNotFound /> }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
