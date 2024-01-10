/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { FaPhoneAlt  } from "react-icons/fa"
import {MdLocationPin} from "react-icons/md"
import { CiMail } from "react-icons/ci"
import { forwardRef } from "react"
import "./Preview.css"
const Preview = forwardRef(({dataSkills,dataLanguages,dataPersonnalInfo ,dataEducations ,dataExperiences},ref) => {
  return (
    <div className="container" ref={ref}>
       <div className="side-left">
        {dataPersonnalInfo &&
            <>
            {dataPersonnalInfo?.image &&
        <div className="image">
            <img src={dataPersonnalInfo?.image} alt="#" />
        </div>
             }
        <h3 className="text-light text-center mt-2">{dataPersonnalInfo?.nom} {dataPersonnalInfo?.prenom}</h3>
             {dataPersonnalInfo?.profile &&
        <p className="text-light text-center">{dataPersonnalInfo?.profile}</p>
             }
        <hr />
            {dataPersonnalInfo?.phone && dataPersonnalInfo?.email && dataPersonnalInfo?.adresse && 
        <div className="contact-info text-light ps-2 mt-5">
            <h4>Contact info</h4>
            <div className="contact-item mt-2 text-light d-flex gap-2 justify-content-start ps-2 align-items-center">
                <div className="icon">
                <FaPhoneAlt />
                </div>
                <div className="text">
                   {dataPersonnalInfo?.phone}
                </div>
            </div>
            <div className="contact-item mt-2 text-light d-flex gap-2 justify-content-start ps-2 align-items-center">
            <div className="icon">
            <CiMail />
                </div>
                <div className="text">
                    {dataPersonnalInfo?.email}
                </div>
            </div>
            <div className="contact-item mt-2 text-light d-flex gap-2 justify-content-start ps-2 align-items-center">
            <div className="icon">
                    <MdLocationPin />
                </div>
                <div className="text">
                   {dataPersonnalInfo?.adresse}
                </div>
            </div>
        </div>
        }
            </>
            }
            {dataSkills.length !== 0 &&
        <div className="skills-content text-light ps-2 mt-5">
            <h4>skills</h4>
            {dataSkills?.map((s,index)=>(
                <div className="skill-item mt-2 d-flex gap-5 align-items-center" key={index}>
                <span className="text-capitalize">{s?.skill}</span>
                <div className="skill-progress" style={{width:"100px",border:"1px solid #555",borderRadius:"25px",height:"10px"}}>
                    <div className="progress-bar" style={{height:"100%",width:`${s.level}%`,background:"dodgerblue",borderRadius:"25px"}}></div>
                </div>
               </div>
                ))}
        </div>
        }
        {dataLanguages.length !== 0 &&
        <div className="langues-content text-light ps-2 mt-5">
            <h4>Langues</h4>
            {dataLanguages.map((lang,index)=>(
                <div className="skill-item mt-2 d-flex gap-5 align-items-center" key={index}>
                <span className="text-capitalize">{lang.language}</span>
                <span className="text-capitalize">{lang.level}</span>
            </div>
                ))}
            </div>
            }
       </div>
       <div className="side-right px-2 py-4">
        {dataPersonnalInfo?.description &&
        <div className="desription-profile">
            <p>{dataPersonnalInfo.description}</p>
        </div>
        }
        {dataEducations.length !== 0 &&
         <div className="education-container text-dark mt-4">
            <h4 className="ps-2">Education</h4>
            <div className="education_list">
                {dataEducations.map((edu,index)=>(
                    <div className="education_item ps-2 mt-2" key={index}>
                    <div className="start-end-date fs-7 fw-bold text-primary">{edu.startDate}/{edu.graduationDate}</div>
                    <p>{edu.degree} in {edu.school} specialite {edu.study}</p>
                </div>
                    ))}
            </div>
        </div>
        }
      {dataExperiences.length !== 0 &&
        <div className="experiences-container">
            <h4 className="ps-2">Experience</h4>
            {dataExperiences.map((exp,index)=>(
                <li key={index}>
                    {exp.role}
                </li>
            ))}
        </div>
        }
       </div>
   </div>
  )
});

export default Preview