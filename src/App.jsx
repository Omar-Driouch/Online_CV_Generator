import { useRef, useState } from "react";
import "./App.css";
import ReactToPrint from "react-to-print";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Personalinfo from "./features/PersonalInfo";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import References from "./features/References";
import Experience from "./components/Experience/Experience";
import Language from "./components/Language/Language";
import Preview from "./components/Preview/Preview";

function App() {
  const [dataSkills, setDataSkills] = useState([]);
  const [dataReferences, setDataReferences] = useState([]);
  const [dataEducations, setDataEducations] = useState([]);
  const [dataLanguages, setDataLanguages] = useState([]);
  const [dataExperiences, setDataExperiences] = useState([]);
  const [dataPersonnalInfo, setDataPersonnalInfo] = useState({});

  const handleReceivePersonnalInfo = (info) => {
    setDataPersonnalInfo(info);
  };
  const handleReciveSkills = (skills) => {
    setDataSkills(skills);
  };
  const handleReciveReferences = (references) => {
    setDataReferences(references);
  };

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
      {/* <ReactToPrint
        pageStyle={{ padding: "0", marging: "0" }}
        trigger={() => (
          <button className="border-0 text-light fw-bold rounded-1 m-3 bg-primary py-2 px-5">
            download
          </button>
        )}
        content={() => printRef.current}
      /> */}
      <main>
        <div className="sections-container">
          <Personalinfo sendData={(info) => handleReceivePersonnalInfo(info)} />
          <Education
            sendData={(education) => handleReciveEducation(education)}
          />
          <Experience
            sendData={(experiences) => handleReciveExperiences(experiences)}
          />
          <Skills sendData={(skills) => handleReciveSkills(skills)} />
          <Language sendData={(Language) => handleReciveLanguage(Language)} />
          <References
            sendData={(references) => handleReciveReferences(references)}
          />
        </div>
        {Object.keys(dataPersonnalInfo).length !== 0 || dataEducations.length > 0 || dataExperiences.length >0 || dataSkills.length>0 || dataLanguages.length >0 || dataReferences.length >0 ? (
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
        ) : (
          <h1 className="start-text">start generate cv</h1>
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;
