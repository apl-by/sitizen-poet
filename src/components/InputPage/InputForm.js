import ButtonRect from "../Buttons/ButtonRect";
import InputPage from "./InputPage";

function InputForm() {
  return (
    <form name="userWordsForm" className="form-findwords">
      <input name="input" type="text" className="form-findwords__input" />
      <ButtonRect type="submit" element="form-findwords__btn" name="Найти строки" />
    </form>
  );
}

export default InputForm;
