import cn from "classnames";

function TutorialCard({ item,  mix }) {

  const classNames = cn("card-step", mix);

  return (
    <li className={classNames}>
      <figure className="card-step__figure">
        <img className="card-step__image" alt="Изображение карточки" src={item.img} />
        <figcaption className="card-step__number">{item.number}</figcaption>
      </figure>
      <p className="card-step__text">{item.text}</p>
    </li>
  );
}

export default TutorialCard;
