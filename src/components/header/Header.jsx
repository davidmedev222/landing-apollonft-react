import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/global/GlobalContext';

const Header = () => {
  const { header } = useContext(GlobalContext);

  const { title, navbar, button } = header;

  const navbarLi = navbar.map((cadaLi) => <HeaderLi key={cadaLi} text={cadaLi} />); // COMPONENT

  return (
    <header className="header">
      {/* TITLE */}
      <h2 className="header-title">{title}</h2>
      {/* BUTTON MENU */}
      <button className="header-menu">
        <img
          src="https://res.cloudinary.com/dos3i5jqy/image/upload/v1673897021/apollonft/main_o9q12x.svg"
          alt="icono de menu"
        />
      </button>
      {/* NAVBAR */}
      <nav className="header-nav">
        <ul className="header-ul">{navbarLi}</ul>
      </nav>
      {/* BUTTON */}
      <button className="header-btn">{button}</button>
    </header>
  );
};

const HeaderLi = ({ text }) => {
  return (
    <li className="header-li">
      <Link className="header-a" to={'/'}>
        {text}
      </Link>
    </li>
  );
};

export { Header };
