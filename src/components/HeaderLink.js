function HeaderLink({ name, path }) {
  const handleClick = (e) => {
    e.preventDefault();
    alert("🤷‍♂️🤷‍♀️");
  };

  return (
    <li className="nav-item">
      <a href={path} className="nav-item__link" onClick={handleClick}>
        {name}
      </a>
    </li>
  );
}

export default HeaderLink;
