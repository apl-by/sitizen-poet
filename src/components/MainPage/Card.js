function Card({ modifier, size }) {
  return (
    <article className={`card ${modifier}`}>
      <img className="card__image" alt="Изображение карточки" src={size} />
      <div className="card__body"></div>
    </article>
  );
}

export default Card;
