import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'
import { Button } from '../button/Button'

const Shop = () => {
  const { shop } = useContext(GlobalContext)

  const { title, buttons, articles, button } = shop

  const shopButtons = buttons.map(({ id, text, className }) => (
    <ShopButtons key={id} text={text} className={className} />
  )) // COMPONENT

  const shopArticles = articles.map((cadaArt) => <ShopArticles key={cadaArt.id} {...cadaArt} />)

  return (
    <section className='shop'>
      <h3 className='shop-title'>{title}</h3>
      <ul className='shop-ul'>{shopButtons}</ul>
      <div className='shop-content'>{shopArticles}</div>
      <Button>{button}</Button>
    </section>
  )
}

const ShopButtons = ({ text, className = '' }) => {
  return (
    <li className='shop-li'>
      <button className={`shop-btn-filter ${className}`}>{text}</button>
    </li>
  )
}

const ShopArticles = ({ image, name, icon, value, page, hour, bid }) => {
  return (
    <article className='shop-art'>
      <img className='shop-img' src={image} alt={name} />
      <h4 className='shop-name'>{name}</h4>
      <header className='shop-header'>
        <img className='shop-icon' src={icon} alt={name} />
        <span className='shop-value'>{value}</span>
        <span className='shop-page'>{page}</span>
      </header>
      <footer className='shop-footer'>
        <span className='shop-hour'>{hour}</span>
        <span className='shop-bid'>{bid}</span>
      </footer>
    </article>
  )
}

export { Shop }
