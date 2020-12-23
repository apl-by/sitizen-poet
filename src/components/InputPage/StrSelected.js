import ButtonDelete from "../Buttons/ButtonDelete";

function StrSelected({ children, isSelected, onDelete, id }) {
  const handleClickDelete = () => {
    onDelete(id, false);
  };

  return (
    <li className={`assembly__item ${!isSelected && "assembly__item_hidden"}`}>
      {children}
      <ButtonDelete onClick={handleClickDelete} />
    </li>
  );
}

export default StrSelected;
