import cn from "classnames";

function Button({ type, name, mix, size, typeModifier, mobile, onClick, disabled }) {
  const classNames = cn("btn", mix, {
    [`btn_size_${size}`]: size,
    [`btn_type_${typeModifier}`]: typeModifier,
    [`btn_mobile_${mobile}`]: mobile,
  });

  return (
    <button type={type} className={classNames} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
}

export default Button;
