import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/global/GlobalContext';

const Header = () => {
  const { header } = useContext(GlobalContext);

  const { title, navbar, button } = header;

  const navbarLi = navbar.map((cadaLi) => <Li key={cadaLi} text={cadaLi} />); // COMPONENT

  return (
    <header className="header">
      <h2 className="header-title">{title}</h2>
      <nav className="header-nav">
        <ul className="header-ul">{navbarLi}</ul>
      </nav>
      <button className="header-btn">{button}</button>
    </header>
  );
};

const Li = ({ text }) => {
  return (
    <li className="header-li">
      <Link className="header-a" to={'/'}>
        {text}
      </Link>
    </li>
  );
};

export { Header };
