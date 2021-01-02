import ButtonClose from "../Buttons/ButtonClose";
import cn from "classnames";

function StrSelected({ children, isSelected, onDelete, id, mix }) {
  const handleClickDelete = () => {
    onDelete(id, false);
  };

  const classNames = cn(
    mix,
    {
      "assembly__item_hidden": !isSelected
    }
  )

  return (
    <li className={classNames}>
      {children}
      <ButtonClose onClick={handleClickDelete} />
    </li>
  );
}

export default StrSelected;
