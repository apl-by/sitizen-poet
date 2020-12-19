import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import TagPage from "./TagPage/TagPage";
import InputPage from "./InputPage/InputPage";
import SubmitPage from "./SubmitPage/SubmitPage";
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <div className="page">
      <Header />
      <Main></Main>
      <Footer />

      <MainPage />
      <TagPage />
      <InputPage />
      <SubmitPage />
    </div>
  );
}

export default App;
