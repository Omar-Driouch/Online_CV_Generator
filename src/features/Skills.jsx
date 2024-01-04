import { FiPlus } from "react-icons/fi";
const Skills = () => {
  return (
    <section className="skills-section">
      <h1>skills</h1>
      <div className="skills-form">
        <input type="text" placeholder="ajouter votre competences" />
        <button>
          <span>
            <FiPlus />
          </span>
          <span>ajouter</span>
        </button>
      </div>
    </section>
  );
};

export default Skills;
