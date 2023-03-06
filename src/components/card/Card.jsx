import { useIntersection } from '../../hooks/intersection/useIntersection'

const Card = ({ className, icon, title, paragraph }) => {
  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.75
  }, true)

  return (
    <article ref={elementRef} data-opacity data-view={isIntersecting} className={`card ${className ?? ''}`}>
      <img data-mask={isIntersecting} className='card-icon' src={icon} alt={title} />
      <h4 data-mask={isIntersecting} className='card-title'>{title}</h4>
      <p data-mask={isIntersecting} className='card-paragraph'>{paragraph}</p>
    </article>
  )
}

export { Card }
