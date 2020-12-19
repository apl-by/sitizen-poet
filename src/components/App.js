import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Footer from "./Footer/Footer";
import TagPage from "./TagPage/TagPage";
import InputPage from "./InputPage/InputPage";

function App() {
  return (
    <div className="page">
      <Header />
      <MainPage />
      <Footer />

      <TagPage />
      <InputPage />
    </div>
  );
}

export default App;
