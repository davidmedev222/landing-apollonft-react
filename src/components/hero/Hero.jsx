import { useContext } from 'react';
import { GlobalContext } from '../../context/global/GlobalContext';

const Hero = () => {
  const { hero } = useContext(GlobalContext);

  const { title1, span, title2, button, paragraph, images } = hero;

  const heroImages = images.map((cadaImagen) => {
    const { id, image, alt, className } = cadaImagen;
    return <HeroImage key={id} image={image} alt={alt} className={className} />;
  }); // COMPONENT

  return (
    <section className="hero">
      {/* TITLE */}
      <h1 className="hero-title">
        {title1}
        <span className="hero-span"> {span} </span>
        {title2}
      </h1>
      {/* BUTTON */}
      <button className="hero-button">{button}</button>
      {/* PARAGRAPH */}
      <p className="hero-paragraph">{paragraph}</p>
      {/* IMAGES */}
      <div className="hero-images">{heroImages}</div>
    </section>
  );
};

const HeroImage = ({ className = '', image, alt }) => {
  return <img className={className} src={image} alt={alt} />;
};

export { Hero };
