import React from "react";
import "./Display.css";
const ExperienceItemDisplay = ({ experience, handleRemove, handleUpdate }) => {
  return (
    <>
      <div className="item-education" key={experience.id}>
        <h6>{experience.role}</h6>

        <div className="buttonsDiv">
          <button
            className="removebutton"
            onClick={() => handleRemove(experience)}
          >
            Remove
          </button>
          <button
            className="updatebutton"
            onClick={() => handleUpdate(experience)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default ExperienceItemDisplay;
