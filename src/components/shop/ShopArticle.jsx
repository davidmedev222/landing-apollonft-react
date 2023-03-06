import { useIntersection } from '../../hooks/intersection/useIntersection'

const ShopArticles = ({ image, name, icon, value, page, hour, bid }) => {
  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.5
  }, true)

  return (
    <article ref={elementRef} data-opacity data-view={isIntersecting} className='shop-art'>
      <img data-mask={isIntersecting} className='shop-img' src={image} alt={name} />
      <h4 data-mask={isIntersecting} className='shop-name'>{name}</h4>
      <header data-mask={isIntersecting} className='shop-header'>
        <img className='shop-icon' src={icon} alt={name} />
        <span className='shop-value'>{value}</span>
        <span className='shop-page'>{page}</span>
      </header>
      <footer data-mask={isIntersecting} className='shop-footer'>
        <span className='shop-hour'>{hour}</span>
        <span className='shop-bid'>{bid}</span>
      </footer>
    </article>
  )
}

export { ShopArticles }
