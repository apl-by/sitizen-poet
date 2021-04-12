import Button from "../Buttons/Button";

function InputForm({ onChange, value, onSearchSubmit, invalidInput }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <form name="userWordsForm" className="form-findwords" onSubmit={handleSubmit}>
      <label className="form-findwords__label">
        <input
          name="input"
          type="text"
          className="form-findwords__input"
          value={value}
          onChange={onChange}
          autoFocus={true}
          // autoComplete="off"
        />
        <span className="form-findwords__valid">{invalidInput}</span>
      </label>
      <Button type="submit" name="Найти строки" size="m" mix="form-findwords__btn" />
    </form>
  );
}

export default InputForm;
