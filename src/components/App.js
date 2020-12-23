import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../utils/api";
import { getCurrentItem } from "../utils/utils";
import { regexpInputValid, templateArr } from "../utils/constants";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import TagPage from "./TagPage/TagPage";
import InputPage from "./InputPage/InputPage";
import SubmitPage from "./SubmitPage/SubmitPage";
import MainPage from "./MainPage/MainPage";

function App() {
  const history = useHistory();

  // -------- Данные из пользовательского ввода--------------------

  const [currentInput, setCurrentInput] = useState("");
  const [submitedInput, setSubmitedInput] = useState("");

  const handleChangeInput = (e) => {
    if (!regexpInputValid.test(e.target.value)) {
      alert("Допускается:\n-ввод кириллицы;\n-слова разделяются одним пробелом;\n-не более 6 слов.");
      return;
    }
    setCurrentInput(e.target.value);
  };

  //-------- Запрос  на сервер за стихами---------------------------
  const [requestObj, setRequestObj] = useState({});
  const [wasSearch, setWasSearch] = useState(false);
  const [currentArr, setCurrentArr] = useState({});

  // ----- Обновление одной строки-----------
  const refreshString = (id) => {
    const cloneArr = [...currentArr];
    const newItem = getCurrentItem(requestObj[id]);
    cloneArr.splice(id, 1, newItem);
    setCurrentArr(cloneArr);
  };

  // ----------Получение строк для отрисовки (всех сразу, при введении слов в основной input )------
  useEffect(() => {
    if (!wasSearch) return;
    const newArr = [];

    for (let key in requestObj) {
      if (key !== "tagsArr") {
        const newItem = getCurrentItem(requestObj[key]);
        newArr.push(newItem);
      }
    }
    setCurrentArr(newArr);
    setWasSearch(false);
  }, [requestObj, wasSearch]);

  // -------------Первичный поиск по массиву введенных слов--------------
  const handleSearch = () => {
    if (submitedInput === currentInput.replace(/\s?$/, "")) {
      return;
    }

    const str = currentInput.replace(/\s?$/, "");
    const arrayInputTags = str.split(" ");

    setSubmitedInput(str);

    const promises = arrayInputTags.map((item) => {
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
        const requestRes = res.reduce(
          (prev, item, index) => {
            if (item[0]) {
              prev[index] = {
                id: index,
                exist: true,
                tag: arrayInputTags[index],
                arrayStrs: item,
                arrLength: item.length,
              };
              return prev;
            } else {
              prev[index] = {
                id: index,
                exist: false,
                tag: arrayInputTags[index],
                arrayStrs: templateArr,
                arrLength: templateArr.length,
              };
              return prev;
            }
          },
          { tagsArr: arrayInputTags }
        );
        setRequestObj(requestRes);
        setWasSearch(true);
      })
      .catch((err) => alert(err));
  };

  // ---------------Добавление/удаление строк в правое окно
  const [isSelected, setIsSelected] = useState({});
  const [strForSubmit, setStrForSubmit] = useState({});

  console.log(strForSubmit);

  const handleSelection = (id, boolean, upperCase) => {
    const selectedStr = { ...isSelected };
    const strUpperCase = { ...strForSubmit };
    boolean ? (selectedStr[id] = true) : (selectedStr[id] = false);
    boolean ? (strUpperCase[id] = upperCase) : delete strUpperCase[id];
    setStrForSubmit(strUpperCase);
    setIsSelected(selectedStr);
  };

  return (
    <div className="page">
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <MainPage history={history} />
          </Route>
          <Route path="/tags-selection">
            <TagPage history={history} />
          </Route>
          <Route path="/user-input">
            <InputPage
              onChange={handleChangeInput}
              onRefresh={refreshString}
              onAddDelete={handleSelection}
              isSelected={isSelected}
              value={currentInput}
              onSearchSubmit={handleSearch}
              history={history}
              currentArr={currentArr}
            />
          </Route>
          <Route path="/user-submit">
            <SubmitPage history={history} />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
