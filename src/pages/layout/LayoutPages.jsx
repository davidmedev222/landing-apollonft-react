import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../../components/export'

const LayoutPages = () => {
  return (
    <>
      {/* COMPONENT */}
      <Header />
      {/* CONTENT */}
      <Outlet />
      {/* COMPONENT */}
      <Footer />
    </>
  )
}

export { LayoutPages }
