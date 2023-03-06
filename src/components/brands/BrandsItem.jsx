const BrandsItem = ({ icon, alt, isIntersecting }) => {
  return (
    <li data-mask={isIntersecting} className='brands-li'>
      <img className='brands-img' src={icon} alt={alt} />
    </li>
  )
}

export { BrandsItem }
