import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'
import { Button } from '../button/Button'
import { ShopArticles } from './ShopArticle'
import { ShopButtons } from './ShopButtons'

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

export { Shop }
