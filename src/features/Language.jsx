import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown, FaTimesCircle } from "react-icons/fa";
const Language = () => {
  const [isHide, setIsHide] = useState(false);
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
            <select id="language" name="language">
              <option value="Arabic">Spanish</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">Spanish</option>
              {/* Add more language options as needed */}
            </select>
          </div>

          <div className="language-input">
            <label htmlFor="language_level">Level:</label>
            <select id="language_level" name="language_level">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              {/* Add more level options as needed */}
            </select>
          </div>

          <button className="add-btn">
            <span>
              <FiPlus />
            </span>
            <span>Add Language</span>
          </button>

          <div className="Language-list"></div>
        </div>
      )}
    </section>
  );
};

export default Language;
