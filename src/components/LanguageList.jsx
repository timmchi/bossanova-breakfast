const languages = ["english", "portuguese"];

const LanguageList = ({ handleLanguageChoice }) => {
  return (
    <div className="language-list">
      <h2>Choose the language for your radio station</h2>
      <div className="language-list-buttons">
        {languages.map((language) => (
          <button key={language} onClick={() => handleLanguageChoice(language)}>
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageList;
