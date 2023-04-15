import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/global/GlobalContext'
import { useIntersection } from '../../hooks/intersection/useIntersection'

const Header = () => {
  const { header } = useContext(GlobalContext)

  const { title, navbar, button } = header

  const navbarLi = navbar.map((cadaLi) => {
    const { id, text } = cadaLi
    return <HeaderLi key={id} text={text} />
  })

  const [toggle, updateToggle] = useState(false)

  const handleToggle = () => updateToggle(!toggle)

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.75
  }, true)

  return (
    <header ref={elementRef} data-opacity data-view={isIntersecting} className='header'>
      {/* TITLE */}
      <Link to='/' data-delay='700' data-mask-hidden data-mask={isIntersecting} className='header-title'>{title}</Link>
      {/* BUTTON MENU */}
      <button data-mask={isIntersecting} onClick={handleToggle} className='header-menu'>
        <img
          src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1673897021/apollonft/main_o9q12x.svg'
          alt='icono de menu'
        />
      </button>
      {/* NAVBAR */}
      <nav data-delay='1300' data-mask-hidden data-mask={isIntersecting} className={`header-nav ${toggle ? 'header-nav-active' : ''}`}>
        <ul className='header-ul'>{navbarLi}</ul>
      </nav>
      {/* BUTTON */}
      <button data-mask={isIntersecting} className='header-btn'>{button}</button>
    </header>
  )
}

const HeaderLi = ({ text }) => {
  return (
    <li className='header-li'>
      <Link className='header-a' to='#'>
        {text}
      </Link>
    </li>
  )
}

export { Header }
