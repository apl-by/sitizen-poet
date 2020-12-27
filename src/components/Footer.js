import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [year, setYear] = useState(2020);

  const date = new Date();
  const currentYear = date.getFullYear();
  if (currentYear > 2020) {
    setYear(`2020-${currentYear}`);
  }

  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__column footer__column_content_copyright">
          <Link className="link logo logo_place_footer" to="/">
            Гражданин поэт
          </Link>
          <p className="footer__author">&copy; {year} / Team39</p>
        </div>
        <nav className="footer__column footer__column_content_info">
          <ul className="footer__column-links">
            <li className="footer__item">
              <a href="/" className="link footer__link">
                О проекте
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="link footer__link">
                Пресса
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__column footer__column_content_contacts">
          <ul className="footer__column-links">
            <li className="footer__item">
              <a href="/" className="link footer__link">
                Контакты
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="link footer__link">
                Сотрудничество
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
