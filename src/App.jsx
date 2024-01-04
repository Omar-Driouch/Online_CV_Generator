import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Education from "./features/Education";
import Skills from "./features/Skills";

function App() {
  const [data , setData] = useState([]);
  const handleRecive = (skills)=>{
    setData(skills);
  }
  console.log(data);
  return (
    <div className="container-app">
      <Header />
      <div className="sections-container">
        <Education />
        <Skills sendData={(skills)=>handleRecive(skills)} />
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
