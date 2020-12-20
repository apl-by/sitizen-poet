import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";

import { api } from "../utils/api";
import { regexpInputValid } from "../utils/constants";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import TagPage from "./TagPage/TagPage";
import InputPage from "./InputPage/InputPage";
import SubmitPage from "./SubmitPage/SubmitPage";
import MainPage from "./MainPage/MainPage";

function App() {

// -------- Данные из пользовательского ввода--------------------

const [currentInput, setCurrentInput] = useState("");
const [submitedInput, setSubmitedInput] = useState("");
const [splitedInput, setSplitedInput] = useState([]);

function handleChangeInput(e) {
  if (!regexpInputValid.test(e.target.value)) {
    alert("Допускается:\n-ввод кириллицы;\n-слова разделяются одним пробелом;\n-не более 7 слов.");
    return;
  }
  setCurrentInput(e.target.value);
}

useEffect(() => {
  const array = submitedInput.split(" ");
  setSplitedInput(array);
}, [submitedInput]);

//-------- Запрос  на сервер за стихами---------------------------
const [promisesRes, setPromisesRes] = useState([]);
const [isRender, setIsRender] = useState(false);

const handleSearch = () => {

  if (submitedInput === currentInput.replace(/\s?$/, "")) {
    return;
  }

  const str = currentInput.replace(/\s?$/, "");
  const array = str.split(" ");

  setSubmitedInput(str);
  setSplitedInput(array);

  const promises = array.map((item) => {
    return api
      .getPoemStrings(item)
      .then((res) => {
        const arrStrings = res.map((i) => {
          return i.fields.text[0];
        });
        return arrStrings;
      })
      .catch((err) => alert(err));
  });

  Promise.all(promises)
    .then((res) => {
      setPromisesRes(res);
      setIsRender(true);
    })
    .catch((err) => alert(err));
};




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
            <InputPage onChange={handleChangeInput} value={currentInput} onClick={handleSearch} isRender={isRender} strArrays={promisesRes} splitedInput={splitedInput} />
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
