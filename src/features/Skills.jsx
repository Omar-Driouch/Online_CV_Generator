import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown, FaRegEdit, FaTimesCircle } from "react-icons/fa";
const Skills = ({ sendData }) => {
  const [isHide, setIsHide] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState(1);
  const [skill, setSkill] = useState("");
  const [error, setError] = useState([]);
  const [level, setLevel] = useState();
  const [skills, setSkills] = useState([]);
  const handleChangeSkill = (e) => {
    setSkill(e.target.value);
  };
  const handleChangeLevel = (e) => {
    setLevel(e.target.value);
  };
  console.log(skills);
  console.log(error);
  const handleClick = () => {
    if (!isUpdate) {
      if (skill && level) {
        if (skills.filter((s) => s.skill === skill).length < 1) {
          setSkills([
            ...skills,
            { id: id, skill: skill, level: parseInt(level) },
          ]);
          setSkill("");
          setLevel("");
          setId((prev) => prev + 1);
          setError([]);
        } else {
          if (!error.includes("skill already exist")) {
            setError([...error, "skill already exist"]);
            setLevel();
            setSkill("");
          } else {
            setError([]);
          }
        }
      }
    } else {
      setSkills([...skills]);
    }
  };
  const handleRemoveSkill = (skillName) => {
    setSkills([...skills.filter((s) => s.skill !== skillName)]);
    setError([]);
  };
  const handleUpdate = (s) => {
    setId(s?.id);
    setSkill(s?.skill);
    setLevel(s?.level);
    setIsUpdate(true);
  };
  sendData(skills);
  console.log(skills);
  return (
    <section className="skills-section">
      <div className="section-heading" onClick={() => setIsHide(!isHide)}>
        <h1>skills</h1>
        <button style={{ border: "none", background: "transparent" }}>
          <FaChevronDown />
        </button>
      </div>
      {!isHide && (
        <div className="skills-form">
          <div className="skill-input">
            <label htmlFor="skill">Skill:</label>
            <input
              type="text"
              value={skill}
              onChange={handleChangeSkill}
              placeholder="Ex:React"
            />
          </div>
          <div className="skill-input">
            <label htmlFor="skill_level">level:</label>
            <input
              type="number"
              min={0}
              max={100}
              value={level}
              onChange={handleChangeLevel}
              placeholder="Ex:50"
            />
          </div>
          <button className="add-btn" onClick={handleClick}>
            <span>
              <FiPlus />
            </span>
            {isUpdate ? <span>update Skill</span> : <span>add skill</span>}
          </button>
          <ul className="errors-list">
            {error.map((err, index) => (
              <li key={index}>{err}</li>
            ))}
          </ul>
          <div className="skills-list">
            {skills?.map((s, index) => (
              <div className="item" key={index}>
                <div className="skill_item">
                  <span>{s.skill}</span>
                  <button
                    onClick={() => {
                      handleRemoveSkill(s.skill);
                    }}
                  >
                    <FaTimesCircle />
                  </button>
                  <button
                    className="text-success"
                    onClick={() => {
                      handleUpdate(s);
                    }}
                  >
                    <FaRegEdit />
                  </button>
                </div>
                <div
                  className="progress"
                  style={{ width: "100%", height: "10px" }}
                >
                  <div className="bar" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
