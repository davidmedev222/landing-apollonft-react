const Card = ({ className, icon, title, paragraph }) => {
  return (
    <article className={`card ${className ?? ''}`}>
      <img className='card-icon' src={icon} alt={title} />
      <h4 className='card-title'>{title}</h4>
      <p className='card-paragraph'>{paragraph}</p>
    </article>
  )
}

export { Card }
