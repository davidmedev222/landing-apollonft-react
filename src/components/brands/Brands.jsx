import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'
import { useIntersection } from '../../hooks/intersection/useIntersection'
import { BrandsItem } from './BrandsItem'

const Brands = () => {
  const { brands } = useContext(GlobalContext)

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.5
  }, true)

  const brandsItem = brands.map(({ id, icon, alt }) => (
    <BrandsItem key={id} icon={icon} alt={alt} isIntersecting={isIntersecting} />
  ))

  return <ul ref={elementRef} data-opacity data-view={isIntersecting} className='brands'>{brandsItem}</ul>
}

export { Brands }
