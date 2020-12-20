import { Route, Switch } from 'react-router-dom';

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
      <Main>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/tags-selection">
            <TagPage />
          </Route>
          <Route path="/user-input">
            <InputPage />
          </Route>
          <Route path="/user-submit">
            <SubmitPage />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
