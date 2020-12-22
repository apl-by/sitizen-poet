import ButtonArrow from "../Buttons/ButtonArrow";
import Button from "../Buttons/Button";

function SubmitPage({ history }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <section className="application page__application">
      <div className="application__top">
        <ButtonArrow />
        <p className="application__counter">3/3</p>
      </div>
      <form name="bioForm" className="form-bio" onSubmit={handleSubmit}>
        <div className="form-bio__data">
          <h2 className="title">Оформите документ</h2>
          <fieldset className="fieldset form-bio__fieldset">
            <h3 className="title title_size_medium form-bio__title">Введите адресата</h3>
            <textarea className="form-bio__recipient"></textarea>
          </fieldset>
          <fieldset className="fieldset form-bio__fieldset">
            <h3 className="title title_size_medium form-bio__title">Введите ваши данные</h3>
            <label htmlFor="fio" className="form-bio__label">
              ФИО*
            </label>
            <input
              type="text"
              name="fioInput"
              id="fio"
              placeholder="Маяковский Владимир Владимирович"
              className="form-bio__input"
            />
            <label htmlFor="address" className="form-bio__label">
              Адрес*
            </label>
            <input
              type="text"
              name="addressInput"
              id="address"
              placeholder="Улица, дом, город, область"
              className="form-bio__input"
            />
            <label htmlFor="tel-number" className="form-bio__label">
              Телефон*
            </label>
            <input
              type="tel"
              name="fiotelNumberInput"
              id="tel-number"
              placeholder="+7 XXX XXX-XX-XX"
              className="form-bio__input"
            />
            <label htmlFor="date" className="form-bio__label">
              Дата обращения
            </label>
            <input type="date" name="dateInput" id="date" placeholder="ДД.ММ.ГГГГ" className="form-bio__input" />
          </fieldset>
          <p className="form-bio__info">Электронный документ будет доступен в личном кабинете</p>
        </div>
        <div className="form-bio__preview">
          <div className="preview">
            <div className="preview__top">
              <p className="preview__recipient">Волкову Евгению Николаевичу, градоначальнику г. Москва</p>
              <p className="preview__sender">от Маяковского Владимира Владимировича</p>
              <p className="preview__adress">Адрес:</p>
              <p className="preview__tel">Телефон:</p>
            </div>
            <div className="preview__body">
              <p className="preview__title">Обращение</p>
              <div className="preview__main-text">
                <p className="preview__stroke">Блажен, кто под крылом своих домашних лар</p>
                <p className="preview__stroke">у подъезда, на скамейке</p>
                <p className="preview__stroke">Людмила светлый взор возводит,</p>
              </div>
            </div>
            <div className="preview__footer">
              <p className="preview__date">16.12.2020 г.</p>
              <p className="preview__signature">/ В.В. Маяковский</p>
            </div>
          </div>
          <Button type="submit" name="Отправить" element="application__control" />
        </div>
      </form>
    </section>
  );
}

export default SubmitPage;
