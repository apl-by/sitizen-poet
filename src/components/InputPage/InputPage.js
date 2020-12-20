import { Link } from 'react-router-dom';

import ButtonLink from "../Buttons/ButtonLink";
import ButtonArrow from "../Buttons/ButtonArrow";
import InputForm from "./InputForm";
import StrChoice from "./StrChoice";
import StrSelected from "./StrSelected";

function InputPage({ onChange, value, onClick, isRender, strArrays, splitedInput }) {

  // ------------Получаем рандомную строку с словом (на доработке)--------------

  function randomString(array, index) {
    const rand = Math.floor(Math.random() * array.length);
    const str = array[rand] || `To be or xxx not to be(на доработке)`;
    const safetyStr = str.replace(/<|>/g, "'");
    const regexpFull = new RegExp(`${splitedInput[index]}`, "i");
    // const regexpSpell = getSpellRgx(splitedInput[index]);
    let modifiedString;
    if (regexpFull.test(safetyStr)) {
      modifiedString = safetyStr.replace(regexpFull, `<span class="form-strokes__span">${splitedInput[index]}</span>`);
      return modifiedString;
    }
    // else if (regexpSpell.test(safetyStr)) {
    //   modifiedString = getStrForReplace(safetyStr, splitedInput[index]);
    //   return modifiedString;
    // }
    else {
      modifiedString = safetyStr.replace("xxx", `<span class="form-strokes__span">${splitedInput[index]}</span>`);
      return modifiedString;
    }
  }

  // -----------------------Для вставки строк в разметку с тегом <span>--------------------

  function createMarkup(item, index) {
    return { __html: randomString(item, index) };
  }

  function MyComponent(item, index) {
    return <p dangerouslySetInnerHTML={createMarkup(item, index)} key={index} className="form-strokes__input"/>;
  }


  return (
    <section className="application page__application">
      <div className="application__top">
        <ButtonArrow />
        <p className="application__counter">2/3</p>
      </div>
      <h2 className="title application__title">Введите обращение</h2>
      <p className="application__subtitle">Не больше 7 слов</p>
      <InputForm onChange={onChange} value={value} onClick={onClick} />

      <div className="form-strokes form-strokes__columns">
        <ul className="form-strokes__list">
          {isRender && strArrays.map((item, index) => {
            return (<StrChoice item={item} index={index} >
              {MyComponent(item, index)}
            </StrChoice>)
          })}
        </ul>
        <div className="assembly form-strokes__assembly">
          <ul className="assembly__list">
            <StrSelected />
          </ul>
        </div>
      </div>
      <Link to="/user-submit" className="application__control">
        <ButtonLink type="button" name="Далее" />
      </Link>
    </section>
  );
}

export default InputPage;
