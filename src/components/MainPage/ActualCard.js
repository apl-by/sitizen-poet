import cn from "classnames";

function ActualCard({ item }) {

  const classNames = cn("card-actual", item.modifier);

  return (
    <li className={classNames}>
      <img className="card-actual__image" alt="Изображение карточки" src={item.img} />
      <div className="card-actual__body">
        <p className="card-actual__text">{item.text}</p>
      </div>
    </li>
  );
}

export default ActualCard;
