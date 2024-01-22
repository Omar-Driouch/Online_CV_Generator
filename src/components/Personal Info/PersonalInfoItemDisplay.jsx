import React from "react";
import "../Display.css";
const PersonalInfoItemDisplay = ({
  Personalinfo,
  handleRemove,
  handleUpdate,
}) => {
  return (
    <>
      <div className="item-education" key={Personalinfo.id}>
        <h6>{Personalinfo.firstName}</h6>

        <div className="buttonsDiv">
          <button
            className="removebutton"
            onClick={() => handleRemove(Personalinfo)}
          >
            Remove
          </button>
          <button
            className="updatebutton"
            onClick={() => handleUpdate(Personalinfo)}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoItemDisplay;
