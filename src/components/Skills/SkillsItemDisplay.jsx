import React from "react";
import "../Display.css";
const SkillsItemDisplay = ({ skill, handleRemove, handleUpdate }) => {
  return (
    <>
      <div className="item-education" key={skill.id}>
        <h6>
          {skill.skill} - {skill.level}
        </h6>

        <div className="buttonsDiv">
          <button className="removebutton" onClick={() => handleRemove(skill)}>
            Remove
          </button>
          <button className="updatebutton" onClick={() => handleUpdate(skill)}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default SkillsItemDisplay;
