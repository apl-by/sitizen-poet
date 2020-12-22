import ButtonArrow from "../Buttons/ButtonArrow";
import ApplicationForm from "./AplicationForm";

function SubmitPage({ history }) {
  return (
    <section className="application page__application">
      <div className="application__top">
        <ButtonArrow />
        <p className="application__counter">3/3</p>
      </div>
      <ApplicationForm history={history} />
    </section>
  );
}

export default SubmitPage;
