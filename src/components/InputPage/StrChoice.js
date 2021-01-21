import MediaQuery from "react-responsive";
import { useEffect, useState } from "react";

import Button from "../Buttons/Button";

function StrChoice({ children, onRefresh, onAdd, onNewSearch, onEdit, isEdit, item, isSelected }) {
  const [newTag, setNewTag] = useState(item.tag);

  const isSelectedBtn = isSelected[item.id] ? "selected" : false;

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
    onAdd(item.id, !isSelected[item.id], item.strUpperCaseTag);
  };

  const handleClickRefresh = () => {
    onRefresh(item.id);
  };

  return (
    <>
      {!isEdit[item.id] && (
        <>
          <li className="form-strokes__item">
            {children}
            <MediaQuery minWidth={571}>
              {item.exist && (
                <Button
                  type="button"
                  mix="form-strokes__btn-refresh"
                  typeModifier="square"
                  onClick={handleClickRefresh}
                />
              )}
              {!item.exist && (
                <Button type="button" mix="form-strokes__btn-edit" typeModifier="square" onClick={handleClickEdit} />
              )}
              <Button
                type="button"
                mix="form-strokes__btn-push"
                typeModifier="square"
                onClick={handleClickAdd}
                selected={isSelectedBtn}
                disabled={!item.exist}
              />
            </MediaQuery>
          </li>

          <MediaQuery maxWidth={570}>
            <div className="form-strokes__btn-mobile">
              {item.exist && (
                <Button
                  type="button"
                  mix="form-strokes__btn-refresh"
                  typeModifier="square"
                  onClick={handleClickRefresh}
                />
              )}
              {!item.exist && (
                <Button type="button" mix="form-strokes__btn-edit" typeModifier="square" onClick={handleClickEdit} />
              )}
              <Button
                type="button"
                mix="form-strokes__btn-push"
                typeModifier="square"
                onClick={handleClickAdd}
                selected={isSelectedBtn}
                disabled={!item.exist}
              />
            </div>
          </MediaQuery>
        </>
      )}
      {!item.exist && isEdit[item.id] && (
        <>
          <form className="form-strokes__item" name="inputForm" onSubmit={handleSubmitInput}>
            <input
              type="text"
              name="tag"
              className="form-strokes__input form-strokes__input_size_l"
              value={newTag}
              onChange={handleChange}
              autoFocus={true}
            />
            <MediaQuery minWidth={571}>
              <Button type="submit" mix="form-strokes__btn-confirm" typeModifier="square" />
              <Button type="button" mix="form-strokes__btn-push" typeModifier="square" disabled={true} />
            </MediaQuery>
          </form>

          <MediaQuery maxWidth={570}>
            <div className="form-strokes__btn-mobile">
              <Button type="submit" mix="form-strokes__btn-confirm" typeModifier="square" onClick={handleSubmitInput} />
              <Button type="button" mix="form-strokes__btn-push" typeModifier="square" disabled={true} />
            </div>
          </MediaQuery>
        </>
      )}
    </>
  );
}

export default StrChoice;
