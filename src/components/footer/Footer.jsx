import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/global/GlobalContext'
import { useIntersection } from '../../hooks/intersection/useIntersection'

const Footer = () => {
  const { footer } = useContext(GlobalContext)

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.5
  }, true)

  const { title, paragraph, social, navbar, copyright } = footer

  const footerSocials = social.map(({ id, icon, alt }) => (
    <FooterSocial key={id} icon={icon} alt={alt} />
  )) // COMPONENT

  const footerNavbar = navbar.map(({ id, title, links }) => (
    <FooterNavbar key={id} title={title} links={links} />
  )) // COMPONENT

  return (
    <footer ref={elementRef} data-opacity data-view={isIntersecting} className='footer'>
      {/* TITLE */}
      <h3 data-mask={isIntersecting} className='footer-title'>{title}</h3>
      {/* PARAGRAPH */}
      <p data-mask={isIntersecting} className='footer-paragraph'>{paragraph}</p>
      {/* SOCIALS */}
      <ul data-mask={isIntersecting} className='footer-socials'>{footerSocials}</ul>
      {/* NAVBAR */}
      <nav data-mask={isIntersecting} className='footer-nav'>{footerNavbar}</nav>
      {/* COPYRIGHT */}
      <h4 data-mask={isIntersecting} className='footer-copyright'>{copyright}</h4>
    </footer>
  )
}

const FooterSocial = ({ icon, alt }) => {
  return (
    <li className='footer-li'>
      <img className='footer-icon' src={icon} alt={alt} />
    </li>
  )
}

const FooterNavbar = ({ title, links }) => {
  return (
    <ul className='footer-ul'>
      <h4 className='footer-subtitle'>{title}</h4>
      {links.map(({ id, name, to }) => (
        <FooterNavbarLi key={id} name={name} to={to} />
      ))}
    </ul>
  )
}

const FooterNavbarLi = ({ to, name }) => {
  return (
    <li className='footer-link'>
      <Link className='footer-a' to={to}>
        {name}
      </Link>
    </li>
  )
}

export { Footer }
