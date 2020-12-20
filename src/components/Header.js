import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header page__header">
      <Link to="/" className="link logo logo_place_header">
        Гражданин поэт
      </Link>
    </header>
  );
}

export default Header;
