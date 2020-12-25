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
  const [invalidValue, setInvalidValue] = useState("");

  const handleChangeInput = (e) => {
    console.log(e.key);
    if (!regexpInputValid.test(e.target.value)) {
      setInvalidValue("используйте кириллицу, один пробел, не более 6 слов");
      return;
    }
    setInvalidValue("");
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
    handleSelection(id, false);
  };

  // ----------Получение строк для отрисовки (всех сразу, при введении слов в основной input )------
  useEffect(() => {
    if (!wasSearch) return;
    const newArr = [];

    for (let key in requestObj) {
      const newItem = getCurrentItem(requestObj[key]);
      newArr.push(newItem);
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
        const requestRes = res.reduce((prev, item, index) => {
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
        }, {});
        setRequestObj(requestRes);
        setWasSearch(true);
      })
      .catch((err) => alert(err))
      .finally(() => {
        setStrForSubmit({});
        setIsSelected({});
      });
  };

  // ---------------Добавление/удаление строк в правое окно
  const [isSelected, setIsSelected] = useState({});
  const [strForSubmit, setStrForSubmit] = useState({});
  const [selectedArrForRender, setSelectedArrForRender] = useState([]);

  useEffect(() => {
    const newArr = [];
    for (let key in strForSubmit) {
      const newItem = strForSubmit[key];
      newArr.push(newItem);
    }
    setSelectedArrForRender(newArr);
  }, [strForSubmit]);

  const handleSelection = (id, boolean, upperCase) => {
    const selectedStr = { ...isSelected };
    const strUpperCase = { ...strForSubmit };
    boolean ? (selectedStr[id] = true) : (selectedStr[id] = false);
    boolean ? (strUpperCase[id] = upperCase) : delete strUpperCase[id];
    setStrForSubmit(strUpperCase);
    setIsSelected(selectedStr);
  };

  // -----------Поиск одного слова  при редактировании + изменение связанных данных

  const [isEdit, setIsEdit] = useState({});

  const handleEdit = (id) => {
    const editStr = { ...isEdit };
    editStr[id] = true;
    setIsEdit(editStr);
  };

  const handleNewSearch = (tag, newTag, id) => {
    if (tag === newTag || newTag === "") {
      const editStr = { ...isEdit };
      editStr[id] = false;
      setIsEdit(editStr);
      return;
    }

    api
      .getPoemStrings(newTag)
      .then((res) => {
        const arrStrings = res.map((i) => {
          return i.fields.text[0];
        });

        const newObj = {};

        if (arrStrings[0]) {
          newObj[id] = {
            id: id,
            exist: true,
            tag: newTag,
            arrayStrs: arrStrings,
            arrLength: arrStrings.length,
          };
        } else {
          newObj[id] = {
            id: id,
            exist: false,
            tag: newTag,
            arrayStrs: templateArr,
            arrLength: templateArr.length,
          };
        }

        const cloneRequestObj = { ...requestObj };
        cloneRequestObj[id] = newObj[id];
        setRequestObj(cloneRequestObj);

        const cloneCurrentArr = [...currentArr];
        const newItem = getCurrentItem(newObj[id]);
        cloneCurrentArr.splice(id, 1, newItem);
        setCurrentArr(cloneCurrentArr);
      })
      .catch((err) => alert(err))
      .finally(() => {
        const editStr = { ...isEdit };
        editStr[id] = false;
        setIsEdit(editStr);
      });

    const cloneInput = currentInput.replace(/\s?$/, "");
    const arrayInputTags = cloneInput.split(" ");
    arrayInputTags.splice(id, 1, newTag);
    const input = arrayInputTags.join(" ");
    setCurrentInput(input);
    setSubmitedInput(input);
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
              onNewSearch={handleNewSearch}
              onEdit={handleEdit}
              isEdit={isEdit}
              isSelected={isSelected}
              strForSubmit={strForSubmit}
              value={currentInput}
              onSearchSubmit={handleSearch}
              history={history}
              currentArr={currentArr}
              invalidInput={invalidValue}
            />
          </Route>
          <Route path="/user-submit">
            <SubmitPage history={history} strsForRender={selectedArrForRender} />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
