function TagItem({ problemTag, onChange, name, selected }) {
  return (
    <label className="form-survey__item">
      <input
        name={name}
        type="radio"
        value={problemTag}
        className="form-survey__radio"
        onChange={onChange}
        checked={selected === problemTag ? true : false}
      />
      <span className="form-survey__custom">{problemTag}</span>
    </label>
  );
}

export default TagItem;
