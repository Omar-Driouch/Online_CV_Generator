import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./features/Skills";

function App() {
  return (
    <div className="container-app">
      <Header />
      <div className="sections-container">
        <Skills />
      </div>
      <Footer />
    </div>
  );
}
export default App;
