function InputPage() {
  return (
    <section class="application page__application">
      <div class="application__top">
        <button class="application__btn-back" type="button" aria-label="Назад"></button>
        <p class="application__counter">2/3</p>
      </div>
      <h2 class="title application__title">Введите обращение</h2>
      <p class="application__subtitle">Не больше 7 слов</p>
      <form name="userWordsForm" class="form-findwords">
        <input name="input" type="text" class="form-findwords__input" />
        <input name="btn" type="submit" class="form-findwords__btn btn" value="Найти строки" />
      </form>

      <div class="form-strokes form-strokes__columns">
        <ul class="form-strokes__list">
          <li class="form-strokes__item">
            <p class="form-strokes__input">Блажен, кто под крылом своих домашних лар</p>
            <button type="button" class="btn btn_type_square form-strokes__btn-refresh"></button>
            <button type="button" class="btn btn_type_square form-strokes__btn-push"></button>
          </li>
        </ul>
        <div class="assembly form-strokes__assembly">
          <ul class="assembly__list">
            <li class="assembly__item">
              <p class="assembly__text">Блажен, кто под крылом своих ДОМАШних лар</p>
              <button type="button" class="assembly__btn-close"></button>
            </li>
          </ul>
        </div>
      </div>
      <button type="button" class="application__control btn">
        Далее
      </button>
    </section>
  );
}

export default InputPage;
