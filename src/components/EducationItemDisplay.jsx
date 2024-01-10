import React from "react";
import "./Display.css"
const EducationItemDisplay = ({
  education,
  handleRemove,
  handleUpdateEducation,
}) => {
 

  return (
    <>
      <div className="item-education" key={education.id}>
       {/*  <h6>{education.school}</h6>
        <h6>{education.degree}</h6> */}
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
            onClick={() => handleUpdateEducation(education)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EducationItemDisplay;
