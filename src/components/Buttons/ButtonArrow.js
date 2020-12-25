function ButtonArrow({ history }) {
  return (
    <button
      className="application__btn-back"
      type="button"
      aria-label="Назад"
      onClick={() => history.goBack()}
    ></button>
  );
}

export default ButtonArrow;
