import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";


const References = ({sendData}) => {
  const [references, setReferences] = useState([])
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [telephone, setTelephone] = useState("");

 
  const [isHide, setIsHide] = useState(false);
  const labelStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };


  function handleReferences() {
    setReferences([...references, {
      name: name,
      description: description,
      telephone: telephone,
    }]);

    setName("");
    setDescription("");
    setTelephone("");
    
  }
  console.log(references)
  sendData(references)

  return (
    <>
      <section className="skills-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>References</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <div className="References-ts">
            <label style={labelStyle}>Name</label>
            <input type="text" id="References-name" 
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            />
            <label style={labelStyle}>Description</label>
            <input type="text" id="references-desc" 
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            />

            <label style={labelStyle}>Phone number</label>
            <input type="tel" id="References-tel" 
            value={telephone}
            onChange={(e) => {
              setTelephone(e.target.value);
            }}
            />

            <button className="add-btn" onClick={handleReferences}>
              <span>
                <FiPlus />
              </span>
              <span>Add References</span>
            </button>
          </div>
        )}
      </section>
    </>
  );
}


export default References;