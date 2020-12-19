import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";



function App() {
  return (
    <div className="page">
      <Header />
    <MainPage />
      <footer className="footer page__footer">
        <p className="footer__copyright">© 2020. Group 39</p>
      </footer>
  </div>
  );
}

export default App;
