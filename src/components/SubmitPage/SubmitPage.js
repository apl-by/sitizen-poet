import ButtonArrow from "../Buttons/ButtonArrow";
import ApplicationForm from "./AplicationForm";

function SubmitPage({ history, strsForRender }) {
  return (
    <section className="application page__application">
      <div className="application__top">
        <ButtonArrow history={history} />
        <p className="application__counter">3/3</p>
      </div>
      <ApplicationForm history={history} strsForRender={strsForRender} />
    </section>
  );
}

export default SubmitPage;
