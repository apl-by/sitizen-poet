function HeaderLink({ name, path }) {
  const handleClick = (e) => {
    e.preventDefault();
    alert("🤷‍♂️🤷‍♀️");
  };

  return (
    <li className="site-nav__item">
      <a href={path} className="site-nav__link" onClick={handleClick}>
        {name}
      </a>
    </li>
  );
}

export default HeaderLink;
