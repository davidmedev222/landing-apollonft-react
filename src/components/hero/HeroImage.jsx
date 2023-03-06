const HeroImage = ({ className = '', image, alt }) => {
  return <img className={className} src={image} alt={alt} />
}

export { HeroImage }
