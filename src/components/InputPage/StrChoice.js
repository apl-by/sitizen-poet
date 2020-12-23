import { useEffect, useState } from "react";

import ButtonSquare from "../Buttons/ButtonSquare";

function StrChoice({ children, onRefresh, onAdd, id, exist, strUpperCaseTag }) {
  const handleClickAdd = () => {
    onAdd(id, true, strUpperCaseTag);
  };

  const handleClickRefresh = () => {
    onRefresh(id);
  };

  return (
    <li className="form-strokes__item">
      {children}
      <ButtonSquare type="button" element="form-strokes__btn-refresh" onClick={handleClickRefresh} />
      <ButtonSquare
        type="button"
        element="form-strokes__btn-push"
        onClick={handleClickAdd}
        disabled={exist ? false : true}
      />
    </li>
  );
}

export default StrChoice;
