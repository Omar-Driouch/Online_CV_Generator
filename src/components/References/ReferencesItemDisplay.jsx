import React from "react";
import "../Display.css";
const ReferencesItemDisplay = ({ References, handleRemove, handleUpdate }) => {
  return (
    <>
      <div className="item-education" key={References.id}>
        <h6>
          {References.References} - {References.level}
        </h6>

        <div className="buttonsDiv">
          <button
            className="removebutton"
            onClick={() => handleRemove(References)}
          >
            Remove
          </button>
          <button
            className="updatebutton"
            onClick={() => handleUpdate(References)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default ReferencesItemDisplay;
