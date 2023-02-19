import { useContext } from 'react'
import { GlobalContext } from '../../context/global/GlobalContext'

const Brands = () => {
  const { brands } = useContext(GlobalContext)

  const brandsItem = brands.map(({ id, icon, alt }) => (
    <BrandsItem key={id} icon={icon} alt={alt} />
  )) // COMPONENT

  return <ul className='brands'>{brandsItem}</ul>
}

const BrandsItem = ({ icon, alt }) => {
  return (
    <li className='brands-li'>
      <img className='brands-img' src={icon} alt={alt} />
    </li>
  )
}

export { Brands }
