import Button from "../Buttons/Button";
import ButtonArrow from "../Buttons/ButtonArrow";
import InputForm from "./InputForm";
import StrChoice from "./StrChoice";
import StrSelected from "./StrSelected";

function InputPage({
  onChange,
  value,
  onSearchSubmit,
  history,
  currentArr,
  onRefresh,
  onAddDelete,
  onNewSearch,
  onEdit,
  isEdit,
  isSelected,
  strForSubmit,
  invalidInput,
}) {
  // ------------Для вставки строк в разметку с тегами--------------------

  function createMarkup(strForRender) {
    return { __html: strForRender };
  }

  function MyComponent(strForRender, classNm) {
    return <p dangerouslySetInnerHTML={createMarkup(strForRender)} className={classNm} />;
  }

  return (
    <section className="application">
      <div className="application__diagonal-box"></div>
      <div className="application__content">
        <div className="application__top">
          <ButtonArrow history={history} />
          <p className="application__counter">2/3</p>
        </div>
        <h2 className="title application__title">Введите обращение</h2>
        <p className="application__subtitle">Не больше 6 слов</p>
        <InputForm onChange={onChange} value={value} onSearchSubmit={onSearchSubmit} invalidInput={invalidInput} />

        <div className="form-strokes">
          <ul className="form-strokes__list">
            {currentArr[0] &&
              currentArr.map((item) => {
                return (
                  <StrChoice
                    key={item.id}
                    onRefresh={onRefresh}
                    onAdd={onAddDelete}
                    onNewSearch={onNewSearch}
                    onEdit={onEdit}
                    isEdit={isEdit}
                    item={item}
                  >
                    {MyComponent(item.strForRender, "form-strokes__input")}
                  </StrChoice>
                );
              })}
          </ul>
          <div className="assembly form-strokes__assembly">
            <ul className="assembly__list">
              {currentArr[0] &&
                currentArr.map((item) => {
                  return (
                    <StrSelected key={item.id} isSelected={isSelected[item.id]} onDelete={onAddDelete} id={item.id} mix="assembly__item">
                      {MyComponent(item.strForRender, "assembly__text")}
                    </StrSelected>
                  );
                })}
            </ul>
          </div>
        </div>
        <Button
          type="button"
          name="Далее"
          mix="application__control"
          size="m"
          onClick={() => history.push("/user-submit")}
          disabled={!Object.keys(strForSubmit).length}
        />
      </div>
    </section>
  );
}

export default InputPage;
