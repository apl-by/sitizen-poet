import { useState } from "react";

import Button from "../Buttons/Button";

function ApplicationForm({ history, strsForRender }) {
  const [formData, setFormData] = useState({ recipient: "", fio: "", address: "", tel: "", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const cloneFormData = { ...formData };
    cloneFormData[name] = value;
    setFormData(cloneFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/petition-created");
  };

  let date = new Date();
  const currentDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  return (
    <form name="bioForm" className="form-bio" onSubmit={handleSubmit}>
      <div className="form-bio__data">
        <h2 className="title form-bio__title">Оформите документ</h2>
        <fieldset className="fieldset form-bio__fieldset">
          <h3 className="title title_size_medium form-bio__title">Введите адресата</h3>
          <textarea
            className="form-bio__recipient"
            placeholder="Волкову Евгению Николаевичу, градоначальнику г. Москва"
            name="recipient"
            onChange={handleChange}
            value={formData[`recipient`]}
          ></textarea>
        </fieldset>
        <fieldset className="fieldset form-bio__fieldset">
          <h3 className="title title_size_medium form-bio__title">Введите ваши данные</h3>
          <label htmlFor="fio" className="form-bio__label">
            ФИО*
          </label>
          <input
            type="text"
            name="fio"
            id="fio"
            placeholder="Маяковский Владимир Владимирович"
            className="form-bio__input"
            onChange={handleChange}
            value={formData[`fio`]}
          />
          <label htmlFor="address" className="form-bio__label">
            Адрес*
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Улица, дом, город, область"
            className="form-bio__input"
            onChange={handleChange}
            value={formData[`address`]}
          />
          <label htmlFor="tel-number" className="form-bio__label">
            Телефон*
          </label>
          <input
            type="tel"
            name="tel"
            id="tel-number"
            placeholder="+7 XXX XXX-XX-XX"
            className="form-bio__input"
            onChange={handleChange}
            value={formData[`tel`]}
          />
          <label htmlFor="date" className="form-bio__label">
            Дата обращения
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="ДД.ММ.ГГГГ"
            className="form-bio__input"
            onChange={handleChange}
            value={formData[`date`] || currentDay}
          />
        </fieldset>
        <p className="form-bio__info">
          Электронный документ будет доступен для распечатки и редактирования в личном кабинете.
        </p>
      </div>
      <div className="form-bio__preview">
        <div className="preview">
          <div className="preview__top">
            <p className="preview__recipient">
              {formData[`recipient`] || "Волкову Евгению Николаевичу, градоначальнику г. Москва"}
            </p>
            <p className="preview__sender">от {formData[`fio`] || "Маяковского Владимира Владимировича"}</p>
            <p className="preview__adress">Адрес:{formData[`address`]}</p>
            <p className="preview__tel">Телефон:{formData[`tel`]}</p>
          </div>
          <div className="preview__body">
            <p className="preview__title">Обращение</p>
            <div className="preview__main-text">
              {strsForRender.map((item, index) => {
                return (
                  <p className="preview__stroke" key={index}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="preview__footer">
            <p className="preview__date">{formData[`date`] || currentDay}</p>
            <p className="preview__signature">/ подпись заявителя</p>
          </div>
        </div>
        <Button type="submit" name="Отправить" element="application__control btn_size_m" />
      </div>
    </form>
  );
}

export default ApplicationForm;
