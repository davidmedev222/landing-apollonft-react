const CardUser = ({ className, image, name, stat }) => {
  return (
    <article className={`card-user ${className ?? ''}`}>
      <img className="card-user-img" src={image} alt={name} />
      <header className="card-user-header">
        <h4 className="card-user-name">{name}</h4>
        <span className="card-user-stat">{stat}</span>
      </header>
    </article>
  );
};

export { CardUser };
