import React from "react";
import "../Display.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const PersonalInfoItemDisplay = ({
  Personalinfo,
  handleRemove,
  handleUpdate,
}) => {
  return (
    <>
      <div
        className="bg-[#f5f5f5] border font-bold py-2 px-2 rounded flex gap-5 items-center"
        key={Personalinfo.id}
      >
        <h6 className=" text-[25px]">{Personalinfo.firstName}</h6>

        <div className="buttonsDiv">
          <button
            className="bg-[#db061b]  text-white font-bold py-2 px-2 mr-2 rounded gap-5 items-center"
            onClick={() => handleRemove(Personalinfo)}
          >
            <DeleteForeverIcon></DeleteForeverIcon>
          </button>
          <button
            className="bg-[#057806]  text-white font-bold py-2 px-2 mr-2 rounded gap-5 items-center"
            onClick={() => handleUpdate(Personalinfo)}
          >
            <EditIcon></EditIcon>
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoItemDisplay;
