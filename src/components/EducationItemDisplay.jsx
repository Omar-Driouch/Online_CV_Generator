import React from "react";
import "./Display.css";
const EducationItemDisplay = ({
  education,
  handleRemove,
  handleUpdate,
}) => {
  return (
    <>
      <div className="item-education" key={education.id}>
        
        <h6>{education.study}</h6>

        <div className="buttonsDiv">
          <button
            className="removebutton"
            onClick={() => handleRemove(education)}
          >
            Remove
          </button>
          <button
            className="updatebutton"
            onClick={() => handleUpdate(education)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EducationItemDisplay;
