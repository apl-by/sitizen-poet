import Header from "./Header/Header";


function App() {
  return (
    <div className="page">
      <Header />
    <main className="content">
      <section className="hero page__hero">
        <h1 className="title hero__title">Сайт гражданских инициатив</h1>
        <button
          className="btn hero__button"
          type="button"
        >Создать инициативу</button>
      </section>
    </main>
      <footer className="footer page__footer">
        <p className="footer__copyright">© 2020. Group 39</p>
      </footer>
  </div>
  );
}

export default App;
