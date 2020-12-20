import ButtonSquare from "../Buttons/ButtonSquare";

function StrChoice() {
  return (
    <li className="form-strokes__item">
      <p className="form-strokes__input">Блажен, кто под крылом своих домашних лар</p>
      <ButtonSquare type="button" element="form-strokes__btn-refresh" />
      <ButtonSquare type="button" element="form-strokes__btn-push" />
    </li>
  );
}

export default StrChoice;
