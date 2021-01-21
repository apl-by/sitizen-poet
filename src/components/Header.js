import { useState } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import cn from "classnames";

import { headerLinks } from "../utils/constants";
import HeaderLink from "./HeaderLink";

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickMenuBtn = () => {
    setIsClicked(!isClicked);
  };

  const handleMediaQueryChange = () => {
    setIsClicked(false);
  };

  const classNames = cn({
    "header__menu-btn": !isClicked,
    "header__close-menu": isClicked,
  });

  return (
    <header className="header">
      <nav className="site-nav">
        <Link className="link logo logo_place_header site-nav__logo" to="/">
          Гражданин поэт
        </Link>
        <MediaQuery minWidth={761}>
          <ul className="site-nav__list">
            {headerLinks.map((item) => {
              return <HeaderLink name={item["name"]} path={item["path"]} key={item.id} />;
            })}
          </ul>
          <button type="button" className="site-nav__btn-search" onClick={() => alert("🧐")}></button>
        </MediaQuery>
      </nav>
      <MediaQuery maxWidth={760} onChange={handleMediaQueryChange}>
        {isClicked && (
          <nav className="site-nav site-nav_type_mobil">
            <ul className="site-nav__list">
              {headerLinks.map((item) => {
                return <HeaderLink name={item["name"]} path={item["path"]} key={item.id} />;
              })}
            </ul>
          </nav>
        )}
        <button type="button" className={classNames} onClick={handleClickMenuBtn}></button>
      </MediaQuery>
    </header>
  );
}

export default Header;
