function InputPage() {
  return (
    <section className="application page__application">
      <div className="application__top">
        <button className="application__btn-back" type="button" aria-label="Назад"></button>
        <p className="application__counter">2/3</p>
      </div>
      <h2 className="title application__title">Введите обращение</h2>
      <p className="application__subtitle">Не больше 7 слов</p>
      <form name="userWordsForm" className="form-findwords">
        <input name="input" type="text" className="form-findwords__input" />
        <input name="btn" type="submit" className="form-findwords__btn btn" value="Найти строки" />
      </form>

      <div className="form-strokes form-strokes__columns">
        <ul className="form-strokes__list">
          <li className="form-strokes__item">
            <p className="form-strokes__input">Блажен, кто под крылом своих домашних лар</p>
            <button type="button" className="btn btn_type_square form-strokes__btn-refresh"></button>
            <button type="button" className="btn btn_type_square form-strokes__btn-push"></button>
          </li>
        </ul>
        <div className="assembly form-strokes__assembly">
          <ul className="assembly__list">
            <li className="assembly__item">
              <p className="assembly__text">Блажен, кто под крылом своих ДОМАШних лар</p>
              <button type="button" className="assembly__btn-close"></button>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" className="application__control btn">
        Далее
      </button>
    </section>
  );
}

export default InputPage;
