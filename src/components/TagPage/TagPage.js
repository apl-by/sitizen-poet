import { problemTags, typeProblems } from "../../utils/constants";
import mayakQuestion from "../../images/mayak-question.png";

import ButtonArrow from "../Buttons/ButtonArrow";
import Button from "../Buttons/Button";
import TagItem from "./TagItem";

function TagPage({ history, onChange, selectedTag }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/user-input");
  };

  return (
    <section className="application">
      <div className="application__diagonal-box"></div>
      <img src={mayakQuestion} alt="Маяковский с книгой и знаком вопроса" className="application__img-question" />
      <div className="application__content">
        <div className="application__top">
          <ButtonArrow history={history} />
          <p className="application__counter">1/3</p>
        </div>
        <form name="surveyForm" className="form-survey" onSubmit={handleSubmit}>
          <fieldset className="fieldset form-survey__fieldset">
            <h2 className="title application__title">Какого рода проблема?</h2>
            <div className="form-survey__list">
              {problemTags.map((item, index) => {
                return (
                  <TagItem
                    problemTag={item}
                    onChange={onChange}
                    name="problem"
                    selected={selectedTag["problem"]}
                    key={index}
                  />
                );
              })}
            </div>
          </fieldset>
          {selectedTag["problem"] && (
            <fieldset className="fieldset form-survey__fieldset">
              <h3 className="title title_size_medium">Что не так?</h3>
              <div className="form-survey__list">
                {typeProblems[selectedTag["problem"]].map((item, index) => {
                  return (
                    <TagItem
                      problemTag={item}
                      onChange={onChange}
                      name="subject"
                      key={index}
                      selected={selectedTag["type"]}
                    />
                  );
                })}
              </div>
            </fieldset>
          )}
          <Button
            type="submit"
            name="Далее"
            element="application__control btn_size_m"
            disabled={!selectedTag["type"]}
          />
        </form>
      </div>
    </section>
  );
}

export default TagPage;
