function ButtonRect({ type, name, element }) {
  return (
    <button type={type} className={`btn ${element}`}>
      {name}
    </button>
  );
}

export default ButtonRect;
