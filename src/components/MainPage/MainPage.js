import imgS from "../../images/s.png";
import imgM from "../../images/m.png";
import imgL from "../../images/l.png";
import imgXL from "../../images/xl.png";
import Button from "../Buttons/Button";
import Card from "./Card";

function MainPage({ history }) {
  return (
    <>
      <section className="hero page__hero">
        <h1 className="title hero__title">Сайт гражданских инициатив</h1>
        <Button
          type="button"
          name="Создать инициативу"
          element="hero__button"
          onClick={() => history.push("/tags-selection")}
        />
      </section>
      <section className="how-it-works page__how-it-works">
        <h2 className="title how-it-works__title">Как это работает</h2>
        <div className="how-it-works__content"></div>
      </section>
      <section className="actual page__actual">
        <h2 className="title actual__title">Актуальные инициативы</h2>
        <ul className="actual__cards">
          <Card modifier="card_size_m" size={imgM} />
          <Card modifier="card_size_m" size={imgM} />
          <Card modifier="card_size_m" size={imgM} />
          <Card modifier="card_size_s" size={imgS} />
          <Card modifier="card_size_s" size={imgS} />
        </ul>
        <Button
          type="button"
          element="actual__btn"
          name="Смотреть ещё"
          onClick={() => alert("Страница с актуальными инициативами")}
        />
      </section>
      <section className="done page__done">
        <h2 className="title done__title">Уже приняты</h2>
        <ul className="done__cards">
          <Card modifier="card_size_xl" size={imgXL} />
          <Card modifier="card_size_l" size={imgL} />
        </ul>
        <Button
          type="button"
          element="done__btn"
          name="Смотреть ещё"
          onClick={() => alert("Страница с принятыми инициативами")}
        />
      </section>
    </>
  );
}

export default MainPage;
