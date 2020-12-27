import iconFacebook from "../../images/icon-facebook.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import iconOk from "../../images/icon-ok.svg";
import iconVk from "../../images/icon-vk.svg";
import overviewPlace from "../../images/overview-place.jpg";

function ResultPage() {
  return (
    <>
      <section className="problem-tags">
        <ul className="problem-tags__list taglist">
          <li className="taglist__item">Коммунальная проблема</li>
          <li className="taglist__item">Электричество</li>
        </ul>
      </section>
      <section className="overview">
        <div className="overview__initiative">
          <div className="overview__text">
            <h3 className="title overview__title">Инициатива №0000 успешно создана!</h3>
            <p className="overview__initiative-text">
              Блажен, кто под крылом своих домашних лар
              <br />у подъезда, на скамейке
              <br />
              Людмила светлый взор возводит,
            </p>
          </div>
          <img src={overviewPlace} alt="Изображение проблемы" className="overview__image" />
        </div>
        <div className="overview__actions">
          <button className="overview__btn" type="button">
            Развернуть
          </button>
          <p className="overview__socials-title">Поделиться:</p>
          <ul className="overview__socials socials">
            <li className="socials__item">
              <a href="#" className="link socials__link">
                <img src={iconFacebook} alt="Иконка Фэйсбук" className="socials__icon" />
              </a>
            </li>
            <li className="socials__item">
              <a href="#" className="link socials__link">
                <img src={iconVk} alt="Иконка Вконтакте" className="socials__icon" />
              </a>
            </li>
            <li className="socials__item">
              <a href="#" className="link socials__link">
                <img src={iconInstagram} alt="Иконка Инстаграм" className="socials__icon" />
              </a>
            </li>
            <li className="socials__item">
              <a href="#" className="link socials__link">
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
            <button type="submit" className="btn btn_size_m form-comment__btn btn_disabled" disabled>
              Отправить
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ResultPage;
