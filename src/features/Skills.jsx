import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown ,FaTimesCircle } from "react-icons/fa";
const Skills = ({sendData}) => {
  const [isHide, setIsHide] = useState(false);
  const [skill , setSkill] = useState("");
  const [skills , setSkills]  = useState([]);
  const handleChange = (e)=>{
    setSkill(e.target.value);
  }
  const handleClick = ()=>{
    if(skill){
      if(!skills.includes(skill)){
        setSkills([...skills,skill]);
        setSkill("");
      }else{
        setSkill("")
      }
    }
  }
  const handleRemoveSkill = (skill)=>{
     setSkills([...skills.filter((s)=> s!==skill)])
  }
  sendData(skills);
  console.log(skills)
  return (
    <section className="skills-section">
      <div className="section-heading"  onClick={() => setIsHide(!isHide)}>
        <h1>skills</h1>
        <button style={{border:"none",background:"transparent"}}><FaChevronDown /></button>
      </div>
      {!isHide && (
        <div className="skills-form">
          <input type="text" value={skill} onChange={handleChange} placeholder="ajouter votre competences" />
          <button className="add-btn" onClick={handleClick}>
            <span>
              <FiPlus />
            </span>
            <span>Add Skill</span>
          </button>
          <div className="skills-list">
            {skills?.map((s,index)=>(
              <div className="skill_item" key={index}>
                <span>
                {s}
                </span>
                <button onClick={()=>{handleRemoveSkill(s)}}>
                <FaTimesCircle />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
