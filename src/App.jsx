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

  const handleReciveSkills = (skills)=>{
    setDataSkills(skills);
  }
  const handleReciveReferences = (references)=>{
    setDataReferences(references);
  }

  return (
    <div className="container-app">
      <Header />
      <main>
      <div className="sections-container">
        <Personalinfo/>
        <Education />
        <Experience />
        <Skills sendData={(skills)=>handleReciveSkills(skills)} />
        <Language />
        <References sendData={handleReciveReferences}/>
      </div>
      <div className="preview">
        <div className="cv-container">
        <Preview dataSkills={dataSkills} />
        </div>
      </div>
      </main>
      <Footer />
    </div>

  );
}
export default App;
