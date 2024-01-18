import React from "react";
import "../Display.css";
const LanguageItemDisplay = ({ language, handleRemove, handleUpdate }) => {
  return (
    <>
      <div className="item-education" key={language.id}>
        <h6>
          {language.language} - {language.level}
        </h6>

        <div className="buttonsDiv">
          <button
            className="removebutton"
            onClick={() => handleRemove(language)}
          >
            Remove
          </button>
          <button
            className="updatebutton"
            onClick={() => handleUpdate(language)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default LanguageItemDisplay;
