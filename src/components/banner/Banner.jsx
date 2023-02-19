import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'
import { Button } from '../button/Button'

const Banner = () => {
  const { banner } = useContext(GlobalContext)

  const { title, button } = banner

  return (
    <section className='banner'>
      {/* TITLE */}
      <h3 className='banner-title'>{title}</h3>
      {/* BUTTON */}
      <Button className='banner-btn'>{button}</Button>
    </section>
  )
}

export { Banner }
