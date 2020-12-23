function ButtonSquare({ type, element, onClick, disabled }) {
  return (
    <button type={type} className={`btn btn_type_square ${element}`} onClick={onClick} disabled={disabled}></button>
  );
}

export default ButtonSquare;
