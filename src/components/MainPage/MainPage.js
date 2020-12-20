import { Link } from 'react-router-dom';

import imgS from "../../images/s.png";
import imgM from "../../images/m.png";
import imgL from "../../images/l.png";
import imgXL from "../../images/xl.png";
import ButtonRect from "../Buttons/ButtonRect";

function MainPage() {
  return (
    <>
      <section className="hero page__hero">
        <h1 className="title hero__title">Сайт гражданских инициатив</h1>
        <Link to="/tags-selection" className="hero__button">
          <ButtonRect type="button" name="Создать инициативу" />
        </Link>
      </section>
      <section className="how-it-works page__how-it-works">
        <h2 className="title how-it-works__title">Как это работает</h2>
        <div className="how-it-works__content"></div>
      </section>
      <section className="actual page__actual">
        <h2 className="title actual__title">Актуальные инициативы</h2>
        <ul className="actual__cards">
          <article className="card card_size_m">
            <img className="card__image" alt="Изображение карточки" src={imgM} />
            <div className="card__body"></div>
          </article>
          <article className="card card_size_m">
            <img className="card__image" alt="Изображение карточки" src={imgM} />
            <div className="card__body"></div>
          </article>
          <article className="card card_size_m">
            <img className="card__image" alt="Изображение карточки" src={imgM} />
            <div className="card__body"></div>
          </article>
          <article className="card card_size_s">
            <img className="card__image" alt="Изображение карточки" src={imgS} />
            <div className="card__body"></div>
          </article>
          <article className="card card_size_s">
            <img className="card__image" alt="Изображение карточки" src={imgS} />
            <div className="card__body"></div>
          </article>
        </ul>
        <ButtonRect type="button" element="actual__btn" name="Смотреть ещё" />
      </section>
      <section className="done page__done">
        <h2 className="title done__title">Уже приняты</h2>
        <ul className="done__cards">
          <article className="card card_size_xl">
            <img className="card__image card__image_size_l" alt="Изображение карточки" src={imgXL} />
            <div className="card__body"></div>
          </article>
          <article className="card card_size_l">
            <img className="card__image card__image_size_l" alt="Изображение карточки" src={imgL} />
            <div className="card__body"></div>
          </article>
        </ul>
        <ButtonRect type="button" element="done__btn" name="Смотреть ещё" />
      </section>
    </>
  );
}

export default MainPage;
