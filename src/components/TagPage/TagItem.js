function TagItem({ problemTag, onChange, name }) {
  return (
    <label className="form-survey__item">
      <input name={name} type="radio" value={problemTag} className="form-survey__radio" onChange={onChange} />
      <span className="form-survey__custom">{problemTag}</span>
    </label>
  );
}

export default TagItem;
