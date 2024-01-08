import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown, FaTimesCircle } from "react-icons/fa";
const Skills = ({ sendData }) => {
  const [isHide, setIsHide] = useState(false);
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
    if (skill && level) {
      if (skills.filter((s)=>s.skill === skill).length < 1) {
        setSkills([...skills, { skill: skill, level: parseInt(level) }]);
        setSkill("");
        setLevel("");
        setError([]);
      } else{
        setError([...error, "skill already exist"]);
      }
    } else {
      if(!skill){
        setError([...error,"skill required"])
      }
      if(!level){
        setError([
          ...error,
         "level required"
        ]);
        setSkill("");
        setLevel("");
      }
    }
  };
  const handleRemoveSkill = (skillName) => {
    setSkills([...skills.filter((s) => s.skill !== skillName)]);
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
              type="text"
              value={level}
              onChange={handleChangeLevel}
              placeholder="Ex:50%"
            />
          </div>
          <button className="add-btn" onClick={handleClick}>
            <span>
              <FiPlus />
            </span>
            <span>Add Skill</span>
          </button>
          <ul className="errors-list">
             {error.map((err,index)=>(
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
