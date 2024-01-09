import { useRef, useState } from "react";
import "./App.css";
import ReactToPrint from "react-to-print"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Personalinfo from "./features/PersonalInfo";
import Education from "./features/Education";
import Skills from "./features/Skills";
import References from "./features/References";
import Experience from "./features/Experience";
import Language from "./features/Language";
import Preview from "./components/Preview/Preview";
 
 
function App() {
  const [dataSkills , setDataSkills] = useState([]);
  const [dataReferences , setDataReferences] = useState([]);
  const [dataEducations, setDataEducations] = useState([]);
  const [dataLanguages, setDataLanguages] = useState([]);
  const [dataExperiences, setDataExperiences] = useState([]);
  const [dataPersonnalInfo, setDataPersonnalInfo] = useState({});
 
  const handleReceivePersonnalInfo = (info)=>{
      setDataPersonnalInfo(info);
  }
  const handleReciveSkills = (skills)=>{
    setDataSkills(skills);
  }
  const handleReciveReferences = (references)=>{
    setDataReferences(references);
  }
 
  const handleReciveEducation = (education) => {
    setDataEducations(education);
  };
 
   const handleReciveLanguage = (Language) => {
     setDataLanguages(Language);
   };
   const handleReciveExperiences = (experiences) => {
     setDataExperiences(experiences);
   };
   const printRef = useRef();
   console.log(dataEducations);
  return (
    <div className="container-app">
      <Header />
      <ReactToPrint
      trigger={()=> <button className="border-0 text-light fw-bold rounded-1 m-3 bg-primary py-2 px-5">download</button>}
      content={() => printRef.current}
      />
      <main>
        <div className="sections-container">
          <Personalinfo sendData={(info)=>handleReceivePersonnalInfo(info)} />
          <Education
            sendData={(education) => handleReciveEducation(education)}
          />
          <Experience
            sendData={(experiences) =>
              handleReciveExperiences(experiences)
            }
          />
          <Skills sendData={(skills) => handleReciveSkills(skills)} />
          <Language sendData={(Language) => handleReciveLanguage(Language)} />
          <References
            sendData={(references) => handleReciveReferences(references)}
          />
        </div>
        <div className="preview">
          <div className="cv-container">
            <Preview
              ref={printRef}
              dataSkills={dataSkills}
              dataEducations={dataEducations}
              dataLanguages={dataLanguages}
              dataExperiences={dataExperiences}
              dataReferences={dataReferences}
              dataPersonnalInfo={dataPersonnalInfo}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;