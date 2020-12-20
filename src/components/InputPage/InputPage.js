import ButtonRect from "../Buttons/ButtonRect";
import ButtonArrow from "../Buttons/ButtonArrow";
import ButtonSquare from "../Buttons/ButtonSquare";
import ButtonDelete from "../Buttons/ButtonDelete";

function InputPage() {
  return (
    <section className="application page__application">
      <div className="application__top">
        <ButtonArrow />
        <p className="application__counter">2/3</p>
      </div>
      <h2 className="title application__title">Введите обращение</h2>
      <p className="application__subtitle">Не больше 7 слов</p>
      <form name="userWordsForm" className="form-findwords">
        <input name="input" type="text" className="form-findwords__input" />
        <ButtonRect type="submit" element="form-findwords__btn" name="Найти строки" />
      </form>

      <div className="form-strokes form-strokes__columns">
        <ul className="form-strokes__list">
          <li className="form-strokes__item">
            <p className="form-strokes__input">Блажен, кто под крылом своих домашних лар</p>
            <ButtonSquare type="button" element="form-strokes__btn-refresh" />
            <ButtonSquare type="button" element="form-strokes__btn-push" />
          </li>
        </ul>
        <div className="assembly form-strokes__assembly">
          <ul className="assembly__list">
            <li className="assembly__item">
              <p className="assembly__text">Блажен, кто под крылом своих ДОМАШних лар</p>
              <ButtonDelete />
            </li>
          </ul>
        </div>
      </div>
      <ButtonRect type="button" element="application__control" name="Далее" />
    </section>
  );
}

export default InputPage;
