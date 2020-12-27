import howItWorks1 from "../images/how-it-works-1.jpg";
import howItWorks2 from "../images/how-it-works-2.jpg";
import howItWorks3 from "../images/how-it-works-3.jpg";
import howItWorks4 from "../images/how-it-works-4.jpg";
import howItWorks5 from "../images/how-it-works-5.jpg";
import howItWorks6 from "../images/how-it-works-6.jpg";
import actual1 from "../images/actual-1.jpg";
import actual2 from "../images/actual-2.jpg";
import actual3 from "../images/actual-3.jpg";
import actual4 from "../images/actual-4.jpg";
import actual5 from "../images/actual-5.jpg";
import done1 from "../images/done-1.jpg";
import done2 from "../images/done-2.jpg";

export const regexpInputValid = /^([а-яА-Я]+\s{1}){0,5}[а-яА-Я]*$/;

export const headerLinks = [
  { name: "Инициативы", path: "/" },
  { name: "Мои предложения", path: "/" },
  { name: "Кабинет", path: "/" },
];

export const tutorialCards = [
  { number: 1, img: howItWorks1, text: "Для начала, укажите род проблемы. Это поможет определить контекст" },
  {
    number: 2,
    img: howItWorks2,
    text:
      "Кратко (до 6 слов) сформулируйте обращение,  например, “замените лампочку”. Если поиск не устраивает,  попробуйте разбить слова на на слоги, например, “замените лампочку”",
  },
  {
    number: 3,
    img: howItWorks3,
    text:
      "Если найденная строка не устраивает, нажмите значок “обновить”. Перенесите в форму справа нужные строки и переходите к оформлению.",
  },
  {
    number: 4,
    img: howItWorks4,
    text:
      "На этом шаге оформляется обращение, которое можно вывести как pdf-документ. Необходимо заполнить поля, документ будет позже доступен в личном кабинете.",
  },
  { number: 5, img: howItWorks5, text: "Инициатива создана! Все инициативы сохраняются и доступны в личном кабинете." },
  { number: 6, img: howItWorks6, text: "Инициативой можно поделиться через соцсети или почту." },
];

export const actualCards = [
  {
    modifier: "card-actual_size_m",
    img: actual1,
    text: `“Я вижу, как взволнованные воды \n
           Зажаты в тесные водопроводы”`,
  },
  { modifier: "card-actual_size_m", img: actual2, text: "“Наконец пришла чума”" },
  { modifier: "card-actual_size_m", img: actual3, text: "“И лампочка мигает\nВсего в пятнадцать свеч”" },
  { modifier: "card-actual_size_s", img: actual4, text: "“Меж нами дистанция”" },
  { modifier: "card-actual_size_s", img: actual5, text: "“Растоптана зверем, чье прозвище-рынок”" },
];

export const doneCards = [
  { modifier: "card-done_size_m", img: done1, text: "“Незабвенная пора,\nЗолотое детство!”" },
  { modifier: "card-done_size_s", img: done2, text: "“На кресле протертом из ситца\nстарушка глядит из окна”" },
];

export const templateArr = [
  `Счастье найти не так просто...<br> <span class="form-strokes__span_type_note">/<i>*tagReplace не найдено, поищите другое</i>/</span>`,
  `Искал тебя — и знал, что не найду...<br> <span class="form-strokes__span_type_note">/<i>*tagReplace не найдено, поищите другое</i>/</span>`,
  `Тщетою сердце обдаёт...<br> <span class="form-strokes__span_type_note">/<i>*tagReplace не найдено, поищите другое</i>/</span>`,
  `Никто еще не разрешил вопроса...<br> <span class="form-strokes__span_type_note">/<i>*tagReplace не найдено, поищите другое</i>/</span>`,
  `Мной ещё не найдена дорога...<br> <span class="form-strokes__span_type_note">/<i>*tagReplace не найдено, поищите другое</i>/</span>`,
  `И в недрах музыки я не нашла ответа...<br> <span class="form-strokes__span_type_note">/<i>*tagReplace не найдено, поищите другое</i>/</span>`,
  `Неужто цели не нашла стрела?<br> <span class="form-strokes__span_type_note">/<i>*tagReplace не найдено, поищите другое</i>/</span>`,
  `Кто не нашел небес внизу- тот не найдет и выше...<br> <span class="form-strokes__span_type_note">/<i>*tagReplace не найдено, поищите другое</i>/</span>`,
];

export const problemTags = ["Коммунальная", "Экономическая", "Социальная", "Трудовая", "Политическая"];

export const typeProblems = {
  Коммунальная: ["Электричество", "Водопровод", "Соседи", "Платежи", "Другое"],
  Экономическая: ["Проблемы бизнеса", "Платежи", "Налогообложение", "Другое"],
  Социальная: ["Благоустройство", "Дискриминация", "Пособия", "Преступность", "Другое"],
  Трудовая: ["Нарушение ТК", "Выплаты", "Безработица", "Другое"],
  Политическая: ["Нарушение прав", "Коррупция", "Некомпетентность", "Другое"],
};
