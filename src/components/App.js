import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Footer from "./Footer/Footer";
import TagPage from "./TagPage/TagPage";
import InputPage from "./InputPage/InputPage";
import SubmitPage from "./SubmitPage/SubmitPage";

function App() {
  return (
    <div className="page">
      <Header />
      <MainPage />
      <Footer />

      <TagPage />
      <InputPage />
      <SubmitPage />
    </div>
  );
}

export default App;
