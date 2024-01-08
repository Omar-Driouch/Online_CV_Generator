import { useState } from "react";
import "./App.css";
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
<<<<<<< HEAD

=======
 
>>>>>>> a957ce1684623dc4f79e0982310f8483581f2619
  const handleReciveSkills = (skills)=>{
    setDataSkills(skills);
  }
  const handleReciveReferences = (references)=>{
    setDataReferences(references);
  }
<<<<<<< HEAD

  const handleReciveEducation = (education) => {
    setDataEducations(education);
  };

   const handleReciveLanguage = (Language) => {
     setDataLanguages(Language);
   };


   const handleReciveExperiences = (experiences) => {
     setDataExperiences(experiences);
   };

=======
 
  const handleReciveEducation = (education) => {
    setDataEducations(education);
  };
 
   const handleReciveLanguage = (Language) => {
     setDataLanguages(Language);
   };
 
 
   const handleReciveExperiences = (experiences) => {
     setDataExperiences(experiences);
   };
 
>>>>>>> a957ce1684623dc4f79e0982310f8483581f2619
  return (
    <div className="container-app">
      <Header />
      <main>
        <div className="sections-container">
          <Personalinfo />
          <Education
            sendData={(education) => handleReciveEducation(education)}
          />
          <Experience
            sendData={(dataExperiences) =>
              handleReciveExperiences(dataExperiences)
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
              dataSkills={dataSkills}
              dataEducations={dataEducations}
              dataLanguages={dataLanguages}
              dataExperiences={dataExperiences}
              dataReferences={dataReferences}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;
 
 
