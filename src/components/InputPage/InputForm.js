import Button from "../Buttons/Button";

function InputForm({ onChange, value, onSearchSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <form name="userWordsForm" className="form-findwords" onSubmit={handleSubmit}>
      <input
        name="input"
        type="text"
        className="form-findwords__input"
        value={value}
        onChange={onChange}
        autoFocus={true}
      />
      <Button type="submit" name="Найти строки" element="form-findwords__btn" />
    </form>
  );
}

export default InputForm;
