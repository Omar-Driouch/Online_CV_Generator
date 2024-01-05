import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Personalinfo from "./features/PersonalInfo";
import Education from "./features/Education";
import Skills from "./features/Skills";
import References from "./features/References";

function App() {
  const [data , setData] = useState([]);
  const handleRecive = (skills)=>{
    setData(skills);
  }
  return (
    <div className="container-app">
      <Header />
      <div className="sections-container">
        <Personalinfo/>
        <Education />
        <Skills sendData={(skills)=>handleRecive(skills)} />
        <References/>
      {/* <ul className="data">
        {data.map((d,index)=>(
          <li key={index}>{d}</li>
        ))}
      </ul> */}
      </div>
      <Footer />
    </div>

  );
}
export default App;
