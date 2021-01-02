import { useEffect, useState } from "react";

import Button from "../Buttons/Button";

function StrChoice({ children, onRefresh, onAdd, onNewSearch, onEdit, isEdit, item }) {
  const [newTag, setNewTag] = useState(item.tag);

  useEffect(() => {
    setNewTag(item.tag);
  }, [item]);

  const handleChange = (e) => {
    if (!/^[а-яА-я]*$/.test(e.target.value)) {
      alert("Допускаются только буквы кириллицы");
      return;
    }
    setNewTag(e.target.value);
  };

  const handleSubmitInput = (e) => {
    e.preventDefault();
    if (newTag === "") {
      setNewTag(item.tag);
      onNewSearch(item.tag, item.tag, item.id);
      return;
    }
    onNewSearch(item.tag, newTag, item.id);
  };

  const handleClickEdit = () => {
    onEdit(item.id);
  };

  const handleClickAdd = () => {
    onAdd(item.id, true, item.strUpperCaseTag);
  };

  const handleClickRefresh = () => {
    onRefresh(item.id);
  };

  return (
    <>
      {!isEdit[item.id] && (
        <li className="form-strokes__item">
          {children}
          {item.exist && (
            <Button type="button" mix="form-strokes__btn-refresh" typeModifier="square" onClick={handleClickRefresh} />
          )}
          {!item.exist && <Button type="button" mix="form-strokes__btn-edit" typeModifier="square" onClick={handleClickEdit} />}
          <Button
            type="button"
            mix="form-strokes__btn-push"
            typeModifier="square"
            onClick={handleClickAdd}
            disabled={!item.exist}
          />
        </li>
      )}
      {!item.exist && isEdit[item.id] && (
        <form className="form-strokes__item" name="inputForm" onSubmit={handleSubmitInput}>
          <input
            type="text"
            name="tag"
            className="form-strokes__input form-strokes__input_size_l"
            value={newTag}
            onChange={handleChange}
            autoFocus={true}
          />
          <Button type="submit" mix="form-strokes__btn-confirm"  typeModifier="square"/>
          <Button type="button" mix="form-strokes__btn-push" typeModifier="square" disabled={true} />
        </form>
      )}
    </>
  );
}

export default StrChoice;
