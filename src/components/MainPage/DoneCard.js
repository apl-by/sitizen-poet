function DoneCard({ item }) {
  return (
    <li className={`card-done ${item.modifier}`}>
      <img className="card-done__image" alt="Изображение карточки" src={item.img} />
      <div className="card-done__body">
        <p className="card-done__text">{item.text}</p>
      </div>
    </li>
  );
}

export default DoneCard;
