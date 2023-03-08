const BrandsItem = ({ icon, isIntersecting }) => {
  return (
    <li data-mask={isIntersecting} className='brands-li'>
      {icon}
    </li>
  )
}

export { BrandsItem }
