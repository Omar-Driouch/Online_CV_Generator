import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
//import Information from './Information';

function Personalinfo() {
  const [isHide, setIsHide] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const inputRefNom = useRef(null);
  const inputRefprenom = useRef(null);
  const inputRefProfil = useRef(null);
  const inputRefemail = useRef(null);
  const inputRefadresse = useRef(null);
  const inputRefphone = useRef(null);
  const inputRefLinkedin = useRef(null);
  const inputRefimage = useRef(null);
  const inputRefdescription = useRef(null);

  function backToFirstStatus(inputfield, placeholdertext) {
    inputfield.current.style.border = "2px solid #80b8de";
    inputfield.current.placeholder = placeholdertext;
    inputfield.current.classList.add("valid-input");
    
  }
  function handleInputValidation(inputfield) {
    if (inputfield.current.value.trim() !== "") {
      setIsValid(true);
      inputfield.current.style.border = "2px solid #80b8de";
    } else {
      setIsValid(false);
      inputfield.current.style.border = "2px solid red";
      inputfield.current.placeholder = "Please fill up this field";
      inputfield.current.classList.add("invalid-input");
      inputfield.current.focus();
    }
  }
  
  const [personalinfo, setPersonalinfo] = useState([]);
  const [Nom, setNom] = useState("");
  const [prenom, setprenom] = useState("");
  const [Profil, setprofil] = useState("");
  const [email, setemail] = useState("");
  const [adresse, setadresse] = useState("");
  const [phone, setphone] = useState("");
  const [Linkedin, setLinkedin] = useState("");
  const [description,Setdescription] = useState("");
  const [image, setimage] = useState("");

  function handlePerso() {
    if(isValid){
      
      setPersonalinfo([
         ...personalinfo,
         {
           Nom:Nom,
           prenom:prenom,
           Profil:Profil,
           email:email,
           adresse:adresse,
           phone:phone,
           Linkedin:Linkedin,
           description:description,
           image:image
         },
       ]);

       setNom("");
       setprenom("");
       setprofil("");
       setemail("");
       setadresse("");
       setphone("");
       setLinkedin("");
       Setdescription("");
       setimage("");
       setIsValid(false);
    }
    
   
  }

  // const [submitted, setSubmitted] = useState(false);




  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitted(true);
    handleInputValidation(inputRefNom);
    handleInputValidation(inputRefprenom);
    handleInputValidation(inputRefProfil);
    handleInputValidation(inputRefemail);
    handleInputValidation(inputRefadresse);
    handleInputValidation(inputRefphone);
    handleInputValidation(inputRefLinkedin);
    handleInputValidation(inputRefdescription);
    handleInputValidation(inputRefimage);

    handlePerso();

  };

  console.log(personalinfo);
  return (
    <>
      <section className="skills-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Personal information</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label>
                  Nom:
                  <input
                   ref={inputRefNom}
                    type="text"
                    name="nom"
                    placeholder="Ex:  "
                    value={Nom}
                    onChange={(e)=>{setNom(e.target.value);
                      backToFirstStatus(inputRefNom, "Ex:  ");}}
                  />
                  Prenom:
                  <input
                  ref={inputRefProfil}
                    type="text"
                    name="prenom"
                    placeholder="Ex: "
                    value={prenom}
                    onChange={(e)=>{setprofil(e.target.value);
                      backToFirstStatus(inputRefprenom, "Ex:  "); }}
                  />
                </label>
              </div>
              <div>
                <label>
                  Profil:
                  <input
                  ref={inputRefProfil}
                    type="text"
                    name="title"
                    placeholder="Ex:  "
                    value={personalinfo.Profil}
                    onChange={(e)=>{setprofil(e.target.value);
                      backToFirstStatus(inputRefProfil, "Ex: Bachelor's ");}}
                  />
                </label>
              </div>
              <div>
                <label>
                  email:
                  <input
                  ref = {inputRefemail}
                    type="text"
                    name="email"
                    placeholder="Ex: nom@gmail.com "
                    value={personalinfo.email}
                    onChange={(e)=>{setemail(e.target.value);
                      backToFirstStatus(inputRefemail, "Ex: Bachelor's ");}}
                  />
                </label>
              </div>
              <div>
                <label>
                  adresse:
                  <input
                  ref = {inputRefadresse}
                    type="text"
                    name="adresse"
                    placeholder="Ex:  "
                    value={personalinfo.adresse}
                    onChange={(e)=>{setadresse(e.target.value);
                      backToFirstStatus(inputRefadresse, "Ex: Bachelor's ");}}                  />
                </label>
              </div>
              <div>
                <label>
                  phone:
                  <input
                  ref={inputRefphone}
                    type="text"
                    name="phone"
                    placeholder="Ex: 0678789 "
                    value={personalinfo.phone}
                    onChange={(e)=>{setphone(e.target.value);
                      backToFirstStatus(inputRefphone, "Ex: Bachelor's ");}}
                  />
                </label>
              </div>
              <div>
                <label>
                  Linkedin:
                  <input
                  ref={inputRefLinkedin}
                    type="text"
                    name="Linkedin"
                    placeholder="Ex:  "
                    value={personalinfo.Linkedin}
                    onChange={(e)=>{setLinkedin(e.target.value);
                      backToFirstStatus(inputRefLinkedin, "Ex: Bachelor's ");}}
                  />
                </label>
              </div>
              <div>
                <label>
                  description: <br />
                  <textarea
                   ref ={inputRefdescription}
                    type="text"
                    name="description"
                    value={personalinfo.description}
                    onChange={(e)=>{setdescription(e.target.value);
                      backToFirstStatus(inputRefdescription, "Ex: Bachelor's ");}}
                  />
                </label>
              </div>
              <div>
                <input
                 ref={inputRefimage}
                 name="image"
                  type="file" 
                  accept="image/*" />
              </div>
            </div>
            <br />
            <button className="add-btn" type="submit">
             <span>
                <FiPlus />
              </span> 
               Soumettre
            </button>
          </form>
        )}
      </section>
    </>
  );
}
export default Personalinfo;
