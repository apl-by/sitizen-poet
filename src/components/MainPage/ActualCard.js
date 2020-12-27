function ActualCard({ item }) {
  return (
    <li className={`card-actual ${item.modifier}`}>
      <img className="card-actual__image" alt="Изображение карточки" src={item.img} />
      <div className="card-actual__body">
        <p className="card-actual__text">{item.text}</p>
      </div>
    </li>
  );
}

export default ActualCard;
