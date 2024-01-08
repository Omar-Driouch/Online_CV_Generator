import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown, FaTimesCircle } from "react-icons/fa";

const Language = ({sendData}) => {
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("Arabic");
  const [level, setLevel] = useState("Native");
  const [isHide, setIsHide] = useState(false);

  const handleAddLanguage = () => {
    setLanguages([
      ...languages,
      {
        language: language,
        level: level,
      },
    ]);
  };

   sendData(languages);

  return (
    <section className="skills-section">
      <div className="section-heading" onClick={() => setIsHide(!isHide)}>
        <h1>Language</h1>
        <button style={{ border: "none", background: "transparent" }}>
          <FaChevronDown />
        </button>
      </div>
      {!isHide && (
        <div className="language-form">
          <div className="language-input">
            <label htmlFor="language">Language:</label>
            <select
              id="language"
              name="language"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="Arabic">Arabic</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              {/* Add more language options as needed */}
            </select>
          </div>

          <div className="language-input">
            <label htmlFor="language_level">Level:</label>
            <select
              id="language_level"
              name="language_level"
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Native">Native</option>
              {/* Add more level options as needed */}
            </select>
          </div>

          <button className="add-btn" onClick={handleAddLanguage}>
            <span>
              <FiPlus />
            </span>
            <span>Add Language</span>
          </button>

           

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
        </div>
      )}
    </section>
  );
};

export default Language;
