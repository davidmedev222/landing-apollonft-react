import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'
import { HeroImage } from './HeroImage'
import { useIntersection } from '../../hooks/intersection/useIntersection'
const Hero = () => {
  const { hero } = useContext(GlobalContext)

  const { title1, span, title2, button, paragraph, images } = hero

  const heroImages = images.map((cadaImagen) => {
    const { id, image, alt, className } = cadaImagen
    return <HeroImage key={id} image={image} alt={alt} className={className} />
  }) // COMPONENT

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.5
  }, true)

  return (
    <section ref={elementRef} data-opacity data-view={isIntersecting} className='hero'>
      {/* TITLE */}
      <h1 data-mask={isIntersecting} className='hero-title'>
        {title1}
        <span className='hero-span'> {span} </span>
        {title2}
      </h1>
      {/* BUTTON */}
      <button data-mask={isIntersecting} className='hero-button'>{button}</button>
      {/* PARAGRAPH */}
      <p data-mask={isIntersecting} className='hero-paragraph'>{paragraph}</p>
      {/* IMAGES */}
      <div className='hero-images'>{heroImages}</div>
    </section>
  )
}

export { Hero }
