function Button({ type, name, element, onClick }) {
  return (
    <button type={type} className={`btn ${element}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
