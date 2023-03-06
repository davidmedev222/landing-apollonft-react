const ShopButtons = ({ text, className = '' }) => {
  return (
    <li className='shop-li'>
      <button className={`shop-btn-filter ${className}`}>{text}</button>
    </li>
  )
}

export { ShopButtons }
