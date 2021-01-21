import cn from "classnames";

function DoneCard({ item }) {

  const classNames = cn("card-actual", item.modifier)

  return (
    <li className={classNames}>
      <img className="card-done__image" alt="Изображение карточки" src={item.img} />
      <div className="card-done__body">
        <p className="card-done__text">{item.text}</p>
      </div>
    </li>
  );
}

export default DoneCard;
