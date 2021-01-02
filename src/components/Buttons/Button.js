import cn from "classnames";

function Button({ type, name, mix, size, typeModifier, onClick, disabled }) {

  const classNames = cn(
    'btn',
    mix,
    {
      [`btn_size_${size}`]: size,
      [`btn_type_${typeModifier}`]: typeModifier,
    }
  );

  return (
    <button type={type} className={classNames} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
}

export default Button;
