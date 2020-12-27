import { headerLinks } from "../utils/constants";
import HeaderLink from "./HeaderLink";

function Header() {
  return (
    <header className="header">
      <nav className="site-nav">
        <a className="link logo logo_place_header site-nav__logo" href="#">
          Гражданин поэт
        </a>
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
