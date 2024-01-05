import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown ,FaTimesCircle } from "react-icons/fa";
const Skills = ({sendData}) => {
  const [isHide, setIsHide] = useState(false);
  const [skill , setSkill] = useState("");
  const [level , setLevel] = useState(0);
  const [skills , setSkills]  = useState([]);
  const handleChangeSkill = (e)=>{
    setSkill(e.target.value);
  }
  const handleChangeLevel = (e)=>{
    setLevel(e.target.value);
  }
  const handleClick = ()=>{
    if(skill && level){
      if(!skills.includes(skill)){
        setSkills([...skills,{skill:skill,level:parseInt(level)}]);
        setSkill("");
        setLevel("");
      }else{
        setSkill("");
        setLevel("");
      }
    }
  }
  const handleRemoveSkill = (skill)=>{
     setSkills([...skills.filter((s)=> s.skill==skill)])
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
          <div className="skill-input">
            <label htmlFor="skill">Skill:</label>
            <input type="text" value={skill} onChange={handleChangeSkill} placeholder="add skill" />
          </div>
          <div className="skill-input">
            <label htmlFor="skill_level">level:</label>
            <input type="text" value={level} onChange={handleChangeLevel} placeholder="Ex:50%" />
          </div>
          <button className="add-btn" onClick={handleClick}>
            <span>
              <FiPlus />
            </span>
            <span>Add Skill</span>
          </button>
          <div className="skills-list">
            {skills?.map((s,index)=>(
              <div className="item"  key={index}>
              <div className="skill_item">
                <span>
                {s.skill}
                </span>
                <span>
                {s.level}
                </span>
                <button onClick={()=>{handleRemoveSkill(s)}}>
                <FaTimesCircle />
                </button>
              </div>
                <div className="progress" style={{width:"100%",height:"10px"}}>
                  <div className="bar" style={{width:`${s.level}%`}}></div>
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
