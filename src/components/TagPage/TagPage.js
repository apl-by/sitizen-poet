import { problemTags, typeProblems } from "../../utils/constants";

import ButtonArrow from "../Buttons/ButtonArrow";
import Button from "../Buttons/Button";
import TagItem from "./TagItem";
import { useEffect, useState } from "react";

function TagPage({ history, onChange, selectedTag }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/user-input");
  };

  // const [selectedProblem, setSelectedProblem] = useState({ problem: "", type: "" });
  // console.log(selectedProblem);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   const clone = { ...selectedProblem };
  //   clone["type"] = "";
  //   name === "problem" ? (clone["problem"] = value) : (clone["type"] = value);
  //   setSelectedProblem(clone);
  // };

  return (
    <section className="application page__application">
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
        <Button type="submit" name="Далее" element="application__control" disabled={!selectedTag["type"]} />
      </form>
    </section>
  );
}

export default TagPage;
