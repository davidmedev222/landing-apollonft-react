import '../styles/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutPages, HomePage, DropPage, MarketplacePage, CreatorPage, CommunityPage } from '../pages/export'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPages />}>
          <Route index element={<HomePage />} />
          <Route path='drop' element={<DropPage />} />
          <Route path='marketplace' element={<MarketplacePage />} />
          <Route path='creator' element={<CreatorPage />} />
          <Route path='community' element={<CommunityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { App }
