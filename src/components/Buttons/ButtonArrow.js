function ButtonArrow({ history }) {
  return (
    <button
      className="btn-arrow"
      type="button"
      aria-label="Назад"
      onClick={() => history.goBack()}
    ></button>
  );
}

export default ButtonArrow;
