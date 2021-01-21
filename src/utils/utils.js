import { templateArr } from "./constants";

function getRandomInd(length) {
  const random = Math.floor(Math.random() * length);
  return random;
}

export function getCurrentItem(item) {
  if (item.exist) {
    const str = item.arrayStrs[getRandomInd(item.arrLength)];
    const safetyStr = str.replace(/<|>/g, "'");
    const regexpTag = new RegExp(`${item.tag}`, "i");
    const strForRender = safetyStr.replace(regexpTag, `<span class="form-strokes__span">${item.tag}</span>`);
    const strUpperCaseTag = safetyStr.replace(regexpTag, `[${item.tag.toUpperCase()}]`);
    const newItem = {
      id: item.id,
      strForRender: strForRender,
      strUpperCaseTag: strUpperCaseTag,
      tag: item.tag,
      exist: true,
    };
    return newItem;
  } else {
    const str = item.arrayStrs[getRandomInd(item.arrLength)];
    const strForRender = str.replace("tagReplace", `[${item.tag}]`);
    const newItem = { id: item.id, strForRender: strForRender, tag: item.tag, exist: false };
    return newItem;
  }
}

export function handleSearchRes(obj, arrStrs, index, tag) {
  const newObj = obj;

  if (arrStrs[0]) {
    newObj[index] = {
      id: index,
      exist: true,
      tag: tag,
      arrayStrs: arrStrs,
      arrLength: arrStrs.length,
    };
  } else {
    newObj[index] = {
      id: index,
      exist: false,
      tag: tag,
      arrayStrs: templateArr,
      arrLength: templateArr.length,
    };
  }
  return newObj;
}
