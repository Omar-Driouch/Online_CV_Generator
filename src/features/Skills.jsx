import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
const Skills = ({sendData}) => {
  const [isHide, setIsHide] = useState(false);
  const [skill , setSkill] = useState("");
  const [skills , setSkills]  = useState([]);
  const handleChange = (e)=>{
    setSkill(e.target.value);
  }
  const handleClick = ()=>{
    if(skill){
      setSkills([...skills,skill]);
      sendData();
      setSkill("");
    }
  }
  return (
    <section className="skills-section">
      <div className="section-heading"  onClick={() => setIsHide(!isHide)}>
        <h1>skills</h1>
        <button style={{border:"none",background:"transparent"}}><FaChevronDown /></button>
      </div>
      {!isHide && (
        <div className="skills-form">
          <input type="text" value={skill} onChange={handleChange} placeholder="ajouter votre competences" />
          <button className="add-skill-btn" onClick={handleClick}>
            <span>
              <FiPlus />
            </span>
            <span>ajouter</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default Skills;
