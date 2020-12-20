function InputForm({ onChange, value, onClick }) {

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onClick();
    }

  return (
    <form name="userWordsForm" className="form-findwords">
      <input name="input" type="text" className="form-findwords__input" value={value} onChange={onChange} />

      <button type="submit" className="form-findwords__btn btn" onClick={handleSubmit}>
      Найти строки
    </button>
    </form>
  );
}

export default InputForm;
