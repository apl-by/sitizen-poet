function TagPage() {
  return (
    <section class="application page__application">
      <div class="application__top">
        <button class="application__btn-back" type="button" aria-label="Назад"></button>
        <p class="application__counter">1/3</p>
      </div>

      <form name="surveyForm" class="form-survey">
        <fieldset class="fieldset form-survey__fieldset">
          <h2 class="title application__title">Какого рода проблема?</h2>
          <div class="form-survey__list">
            <label class="form-survey__item">
              <input name="problem" type="radio" value="Коммунальная" class="form-survey__radio" />
              <span class="form-survey__custom">Коммунальная</span>
            </label>
            <label class="form-survey__item">
              <input name="problem" type="radio" value="Экономическая" class="form-survey__radio" />
              <span class="form-survey__custom">Экономическая</span>
            </label>
            <label class="form-survey__item">
              <input name="problem" type="radio" value="Социальная" class="form-survey__radio" />
              <span class="form-survey__custom">Социальная</span>
            </label>
            <label class="form-survey__item">
              <input name="problem" type="radio" value="Урбанистическая" class="form-survey__radio" />
              <span class="form-survey__custom">Урбанистическая</span>
            </label>
            <label class="form-survey__item">
              <input name="problem" type="radio" value="Политическая" class="form-survey__radio" />
              <span class="form-survey__custom">Политическая</span>
            </label>
          </div>
        </fieldset>
        <fieldset class="fieldset form-survey__fieldset">
          <h3 class="title title_size_medium">Что не так?</h3>
          <div class="form-survey__list">
            <label class="form-survey__item">
              <input name="subject" type="radio" value="Электричество" class="form-survey__radio" />
              <span class="form-survey__custom">Электричество</span>
            </label>
            <label class="form-survey__item">
              <input name="subject" type="radio" value="Водопровод" class="form-survey__radio" />
              <span class="form-survey__custom">Водопровод</span>
            </label>
            <label class="form-survey__item">
              <input name="subject" type="radio" value="Соседи" class="form-survey__radio" />
              <span class="form-survey__custom">Соседи</span>
            </label>
            <label class="form-survey__item">
              <input name="subject" type="radio" value="Платежи" class="form-survey__radio" />
              <span class="form-survey__custom">Платежи</span>
            </label>
          </div>
        </fieldset>
        <input type="submit" class="btn application__control" value="Далее" />
      </form>
    </section>
  );
}

export default TagPage;
