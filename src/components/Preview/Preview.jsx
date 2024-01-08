import { FaPhone } from "react-icons/fa"
import "./Preview.css"
const Preview = ({dataSkills,dataReferences}) => {
  return (
    <div className="container">
       <div className="side-left">
        <div className="image">
            <img src="omar_driouch_pic.png"alt="#" />
        </div>
        <h3 className="text-light text-center mt-2">omar driouich</h3>
        <p className="text-light text-center">Full-stack Dot Net Developer</p>
        <hr />
        <div className="contact-info text-light ps-2 mt-5">
            <h4>Contact info</h4>
            <div className="contact-item mt-2 text-light d-flex gap-2 justify-content-start ps-2 align-items-center">
                <div className="icon bg-info px-2 py-1 rounded-pill">
                 <FaPhone/>
                </div>
                <div className="text">
                   065896299445
                </div>
            </div>
            <div className="contact-item mt-2 text-light d-flex gap-2 justify-content-start ps-2 align-items-center">
                <div className="icon bg-info px-2 py-1 rounded-pill">
                 <FaPhone/>
                </div>
                <div className="text">
                   065896299445
                </div>
            </div>
            <div className="contact-item mt-2 text-light d-flex gap-2 justify-content-start ps-2 align-items-center">
                <div className="icon bg-info px-2 py-1 rounded-pill">
                 <FaPhone/>
                </div>
                <div className="text">
                   065896299445
                </div>
            </div>
            <div className="contact-item mt-2 text-light d-flex gap-2 justify-content-start ps-2 align-items-center">
                <div className="icon bg-info px-2 py-1 rounded-pill">
                 <FaPhone/>
                </div>
                <div className="text">
                   065896299445
                </div>
            </div>
        </div>
        <div className="skills-content text-light ps-2 mt-5">
            <h4>skills</h4>
            <div className="skill-item mt-2 d-flex gap-5 align-items-center">
                <span className="text-capitalize">react</span>
                <div className="skill-progress" style={{width:"100px",border:"1px solid #555",borderRadius:"25px",height:"10px"}}>
                    <div className="progress-bar" style={{height:"100%",width:"50%",background:"dodgerblue",borderRadius:"25px"}}></div>
                </div>
            </div>
            <div className="skill-item mt-2 d-flex gap-5 align-items-center">
                <span className="text-capitalize">react</span>
                <div className="skill-progress" style={{width:"100px",border:"1px solid #555",borderRadius:"25px",height:"10px"}}>
                    <div className="progress-bar" style={{height:"100%",width:"50%",background:"dodgerblue",borderRadius:"25px"}}></div>
                </div>
            </div>
            <div className="skill-item mt-2 d-flex gap-5 align-items-center">
                <span className="text-capitalize">react</span>
                <div className="skill-progress" style={{width:"100px",border:"1px solid #555",borderRadius:"25px",height:"10px"}}>
                    <div className="progress-bar" style={{height:"100%",width:"50%",background:"dodgerblue",borderRadius:"25px"}}></div>
                </div>
            </div>
            <div className="skill-item mt-2 d-flex gap-5 align-items-center">
                <span className="text-capitalize">react</span>
                <div className="skill-progress" style={{width:"100px",border:"1px solid #555",borderRadius:"25px",height:"10px"}}>
                    <div className="progress-bar" style={{height:"100%",width:"50%",background:"dodgerblue",borderRadius:"25px"}}></div>
                </div>
            </div>
            <div className="skill-item mt-2 d-flex gap-5 align-items-center">
                <span className="text-capitalize">react</span>
                <div className="skill-progress" style={{width:"100px",border:"1px solid #555",borderRadius:"25px",height:"10px"}}>
                    <div className="progress-bar" style={{height:"100%",width:"50%",background:"dodgerblue",borderRadius:"25px"}}></div>
                </div>
            </div>
        </div>
        <div className="langues-content text-light ps-2 mt-5">
            <h4>Langues</h4>
            <div className="skill-item mt-2 d-flex gap-5 align-items-center">
                <span className="text-capitalize">Francais</span>
                <div className="langue-progress" style={{width:"100px",border:"1px solid #555",borderRadius:"25px",height:"10px"}}>
                    <div className="progress-bar" style={{height:"100%",width:"50%",background:"dodgerblue",borderRadius:"25px"}}></div>
                </div>
            </div>
            <div className="skill-item mt-2 d-flex gap-5 align-items-center">
                <span className="text-capitalize">Englais</span>
                <div className="langue-progress" style={{width:"100px",border:"1px solid #555",borderRadius:"25px",height:"10px"}}>
                    <div className="progress-bar" style={{height:"100%",width:"50%",background:"dodgerblue",borderRadius:"25px"}}></div>
                </div>
            </div>
            <div className="skill-item mt-2 d-flex gap-5 align-items-center">
                <span className="text-capitalize">Arab</span>
                <div className="langue-progress" style={{width:"100px",border:"1px solid #555",borderRadius:"25px",height:"10px"}}>
                    <div className="progress-bar" style={{height:"100%",width:"50%",background:"dodgerblue",borderRadius:"25px"}}></div>
                </div>
            </div>
            </div>
       </div>
       <div className="side-right px-2 py-4">
        <div className="profile">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur non dignissimos voluptatum voluptatibus inventore quos, deleniti distinctio eligendi autem nihil vel possimus animi ab maiores voluptas architecto, officia placeat quod.
            </p>
        </div>
        <div className="education-container text-dark mt-4">
            <h4 className="ps-2">Education</h4>
            <div className="education_list">
                <div className="education_item ps-2 mt-2">
                    <div className="start-end-date fs-7 fw-bold text-primary">2012-2023</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore saepe quas <br /> nobis ex ducimus obcaecati adipisci, provident quibusdam voluptates!</p>
                </div>
                <div className="education_item ps-2 mt-2">
                    <div className="start-end-date fs-7 fw-bold text-primary">2012-2023</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore saepe quas <br /> nobis ex ducimus obcaecati adipisci, provident quibusdam voluptates!</p>
                </div>
                <div className="education_item ps-2 mt-2">
                    <div className="start-end-date fs-7 fw-bold text-primary">2012-2023</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab inventore saepe quas <br /> nobis ex ducimus obcaecati adipisci, provident quibusdam voluptates!</p>
                </div>
            </div>
        </div>

       </div>
   </div>

  )
}

export default Preview