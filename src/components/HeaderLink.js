function HeaderLink({ name, path }) {
  return (
    <li className="site-nav__item">
      <a href={path} className="site-nav__link">
        {name}
      </a>
    </li>
  );
}

export default HeaderLink;
