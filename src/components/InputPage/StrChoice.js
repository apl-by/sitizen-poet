import ButtonSquare from "../Buttons/ButtonSquare";

function StrChoice({children}) {
  return (
    <li className="form-strokes__item">
      {children}
      <ButtonSquare type="button" element="form-strokes__btn-refresh" />
      <ButtonSquare type="button" element="form-strokes__btn-push" />
    </li>
  );
}

export default StrChoice;
