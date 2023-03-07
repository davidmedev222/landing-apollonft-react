import '../styles/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutPages, HomePage } from '../pages/export'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPages />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { App }
