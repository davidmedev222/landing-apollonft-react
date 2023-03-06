import { useIntersection } from '../../hooks/intersection/useIntersection'

const CardUser = ({ className, image, name, stat }) => {
  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.75
  }, true)

  return (
    <article ref={elementRef} data-opacity data-view={isIntersecting} className={`card-user ${className ?? ''}`}>
      <img data-mask={isIntersecting} className='card-user-img' src={image} alt={name} />
      <header data-mask={isIntersecting} className='card-user-header'>
        <h4 className='card-user-name'>{name}</h4>
        <span className='card-user-stat'>{stat}</span>
      </header>
    </article>
  )
}

export { CardUser }
