import { Link } from 'react-router-dom';

import ButtonRect from "../Buttons/ButtonRect";
import ButtonArrow from "../Buttons/ButtonArrow";
import InputForm from "./InputForm";
import StrChoice from "./StrChoice";
import StrSelected from "./StrSelected";

function InputPage() {
  return (
    <section className="application page__application">
      <div className="application__top">
        <ButtonArrow />
        <p className="application__counter">2/3</p>
      </div>
      <h2 className="title application__title">Введите обращение</h2>
      <p className="application__subtitle">Не больше 7 слов</p>
      <InputForm />

      <div className="form-strokes form-strokes__columns">
        <ul className="form-strokes__list">
          <StrChoice />
        </ul>
        <div className="assembly form-strokes__assembly">
          <ul className="assembly__list">
            <StrSelected />
          </ul>
        </div>
      </div>
      <Link to="/user-submit" className="application__control">
      <ButtonRect type="button" name="Далее" />
      </Link>
    </section>
  );
}

export default InputPage;
