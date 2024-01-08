import "./Preview.css"
const Preview = ({dataSkills}) => {
  return (
    <div className="container">
       <div className="side-left">
        <div className="skills-content" style={{color:"#fff"}}>
            {dataSkills.map((s,index)=>(
                <li key={index}>{s.skill} {s.level}</li>
            ))}
        </div>
       </div>
       <div className="side-right">

       </div>
   </div>

  )
}

export default Preview