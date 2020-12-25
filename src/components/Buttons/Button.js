function Button({ type, name, element, onClick, disabled }) {
  return (
    <button type={type} className={`btn ${element}`} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
}

export default Button;
