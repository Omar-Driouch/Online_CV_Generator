import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown, FaTimesCircle } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import useFormValidation from "./FormValidation";

const Language = ({ sendData }) => {
  const [languages, setLanguages] = useState([]);
   const [language, setLanguage] = useState("Arabic");
   const [level, setLevel] = useState("Native");
  const [isHide, setIsHide] = useState(true);
  const [SelectedLanguage, setSelectedLanguage] = useState(true);
  const [SelectedLevel, setSelectedLevel] = useState(true);

  const Levels = {
    Beginner: "Beginner",
    Intermediate: "Intermediate",
    Advanced: "Advanced",
    Native: "Native",
  };

  const Languages = {
    Arabic: "Arabic",
    English: "English",
    French: "French",
    Spanish: "Spanish",
    Russian: "Russian",
    Portuguese: "Portuguese",
    Italian: "Italian",
    Japaneses: "Japaneses",
  };

const LoadData = () => {
  if (!isUpdate) setExperience([...experience, values]);
  return isUpdate;
};

const SetIsUpdate = (obj) => {
  console.log("====================================");
  console.log(obj);
  console.log("====================================");
   
};
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleChangeDatePicker,
    handleUpdatExperience,
  } = useFormValidation(
    {
      id: Date.now(),
      language: "",
      level: "",
      
    },
    LoadData,
    SetIsUpdate,
    "Language"
  );




   const handleAddLanguage = () => {
    setLanguages([
      ...languages,
      {
        language: SelectedLanguage,
        level: SelectedLevel,
      },
    ]);
    sendData(languages);
    console.log(languages);
  };

  const handleOnChangeLanguage = (e) => {

    setSelectedLanguage(e.target.value);
    setLanguage(SelectedLanguage)
  };

  const handleOnChangeLevel = (e) => {
    setSelectedLevel(e.target.value);
  };

  
  
  return (
    <section className="languages-section">
      <div className="section-heading" onClick={() => setIsHide(!isHide)}>
        <h1>Language</h1>
        <button style={{ border: "none", background: "transparent" }}>
          <FaChevronDown />
        </button>
      </div>
      {!isHide && (
        <div className="language-form">
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="language-name">Language</InputLabel>
            <Select
              labelId="language-name"
              id="language-name"
              value={SelectedLanguage}
              label="Language-"
              placeholder="Language"
              error={""}
              onChange={handleOnChangeLanguage}
            >
              <MenuItem value={Languages.Arabic}>Arabic</MenuItem>
              <MenuItem value={Languages.English}>English</MenuItem>
              <MenuItem value={Languages.French}>French</MenuItem>
              <MenuItem value={Languages.Spanish}>Spanish</MenuItem>
              <MenuItem value={Languages.Portuguese}>Portuguese</MenuItem>
              <MenuItem value={Languages.Italian}>Italian</MenuItem>
              <MenuItem value={Languages.Japaneses}>Japaneses</MenuItem>
            </Select>
            <FormHelperText>generate Errors here</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="Level-name">Level</InputLabel>
            <Select
              labelId="Level-name"
              id="Level-name"
              value={SelectedLevel}
              label="Level-"
              placeholder="Level"
              onChange={handleOnChangeLevel}
            >
              <MenuItem value={Levels.Beginner}>Beginner</MenuItem>
              <MenuItem value={Levels.Intermediate}>Intermediate</MenuItem>
              <MenuItem value={Levels.Advanced}>Advanced</MenuItem>
              <MenuItem value={Levels.Native}>Native</MenuItem>
            </Select>
            <FormHelperText>Level generate Errors here</FormHelperText>
          </FormControl>
          <button className="add-btn" onClick={handleAddLanguage}>
            <span>
              <FiPlus />
            </span>
            <span>Add Language</span>
          </button>
        </div>
      )}
      <div className="component-list">
        {languages?.map((l, index) => (
          <div className="item" key={index}>
            <div className="component_item">
              <span>
                {" "}
                {l.language} - {l.level}
              </span>
              <button>
                <FaTimesCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Language;
