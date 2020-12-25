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
