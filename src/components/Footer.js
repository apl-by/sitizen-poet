import { useState } from "react";

function Footer() {
  const [year, setYear] = useState(2020);

  const date = new Date();
  const currentYear = date.getFullYear();
  if (currentYear > 2020) {
    setYear(`2020-${currentYear}`);
  }

  return (
    <footer className="footer page__footer">
      <p className="footer__copyright">&copy; {year}. Group 39</p>
    </footer>
  );
}

export default Footer;
