import { headerLinks } from "../utils/constants";
import HeaderLink from "./HeaderLink";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="site-nav">
        <Link className="link logo logo_place_header site-nav__logo" to="/">
          Гражданин поэт
        </Link>
        <ul className="site-nav__list">
          {headerLinks.map((item, index) => {
            return <HeaderLink name={item["name"]} path={item["path"]} key={index} />;
          })}
        </ul>
        <button type="button" className="site-nav__btn-search"></button>
      </nav>
    </header>
  );
}

export default Header;
