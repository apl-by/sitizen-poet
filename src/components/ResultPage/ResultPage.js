import iconFacebook from "../../images/icon-facebook.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import iconOk from "../../images/icon-ok.svg";
import iconVk from "../../images/icon-vk.svg";
import overviewPlace from "../../images/overview-place.jpg";

function ResultPage({ selectedProblem, initiatives }) {
  const handleClick = (e) => {
    e.preventDefault();
    alert("🤷‍♂️😜😁🙃😘🤗🤷‍♀️");
  };

  return (
    <>
      <section className="problem-tags">
        <ul className="problem-tags__list taglist">
          <li className="taglist__item">{selectedProblem.problem}</li>
          {selectedProblem.type !== "Другое" && <li className="taglist__item">{selectedProblem.type}</li>}
        </ul>
      </section>
      <section className="overview">
        <div className="overview__initiative">
          <div className="overview__text">
            <h3 className="title overview__title">{`Инициатива №${initiatives.i} успешно создана!`}</h3>
            {initiatives[initiatives["i"]].strings.map((item, index) => {
              return (
                <p className="overview__initiative-text" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
          <img src={overviewPlace} alt="Изображение проблемы" className="overview__image" />
        </div>
        <div className="overview__actions">
          <button className="overview__btn" type="button" disabled={true}>
            Развернуть
          </button>
          <p className="overview__socials-title">Поделиться:</p>
          <ul className="overview__socials socials">
            <li className="socials__item">
              <a href="#" className="link socials__link" onClick={handleClick}>
                <img src={iconFacebook} alt="Иконка Фэйсбук" className="socials__icon" />
              </a>
            </li>
            <li className="socials__item">
              <a href="#" className="link socials__link" onClick={handleClick}>
                <img src={iconVk} alt="Иконка Вконтакте" className="socials__icon" />
              </a>
            </li>
            <li className="socials__item">
              <a href="#" className="link socials__link" onClick={handleClick}>
                <img src={iconInstagram} alt="Иконка Инстаграм" className="socials__icon" />
              </a>
            </li>
            <li className="socials__item">
              <a href="#" className="link socials__link" onClick={handleClick}>
                <img src={iconOk} alt="Иконка Одноклассники" className="socials__icon" />
              </a>
            </li>
            <li className="socials__item">
              <button className="socials__btn-expand" type="button"></button>
            </li>
          </ul>
        </div>
      </section>
      <section className="comment-section">
        <form name="commentForm" className="comment-section__form form-comment">
          <h3 className="title title_size_medium comment-section__title">Оставить комментарий:</h3>
          <div className="form-comment__input-area">
            <textarea className="form-comment__input"></textarea>
            <button type="submit" className="btn btn_size_m form-comment__btn" disabled>
              Отправить
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ResultPage;
