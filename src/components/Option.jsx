function Option({ option, selected, onClick }) {
  return (
    <button
      className={`option ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {option}
    </button>
  );
}

export default Option;