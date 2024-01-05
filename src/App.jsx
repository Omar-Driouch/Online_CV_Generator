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

function App() {
  const [data , setData] = useState([]);
  const handleRecive = (skills)=>{
    setData(skills);
  }
  return (
    <div className="container-app">
      <Header />
      <main>
      <div className="sections-container">
        <Personalinfo/>
        <Education />
        <Experience />
        <Skills sendData={(skills)=>handleRecive(skills)} />
        <Language />
        <References/>
      </div>
      <div className="preview">
      <ul className="data">
        {data.map((d,index)=>(
          <li key={index}>{d.skill} {d.level}</li>
          ))}
        </ul>

      </div>
      </main>
      <Footer />
    </div>

  );
}
export default App;
