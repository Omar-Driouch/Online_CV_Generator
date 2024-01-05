import React, {useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
//import Information from './Information';

function Personalinfo(){
  const [isHide, setIsHide] = useState(false);
        const [personalinfo, setPersonalinfo] = useState({
          // nom: '',
          // prenom:'',
          // profil:'',
          // email: '',
          // phone: '',
          // adresse: '',
          // linkedin:'',
          // description :'',
        });
    // const [submitted, setSubmitted] = useState(false);
      
          const handleChange = (e) => {
            const { name, value } = e.target;
            setPersonalinfo({
              ...personalinfo,
              [name]: value,
            });
          };   

          const handleSubmit = (e) => {
            e.preventDefault();
            // setSubmitted(true);
          };
          console.log(personalinfo)
          return(
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
    <div >
    
    <label>
          Nom:
          <input type="text" name="nom" value={personalinfo.nom} onChange={handleChange} />
          <br />
      <br/>

          Prenom:
          <input type="text" name="prenom" value={personalinfo.prenom} onChange={handleChange} />

        </label>
        <br />
      <br/>

        <label>
          Profil:
          <input type="text" name="title" value={personalinfo.title} onChange={handleChange} />
        </label>
        <br />
      <br/>
       
        <label>
          email:
          <input type="text" name="email" value={personalinfo.email} onChange={handleChange} />
        </label>
        <br />
        <br/>
    
        <label>
          adresse:
        
      <input type="text" name="adresse" value={personalinfo.adresse} onChange={handleChange} />
        </label>
      <br/>

        <br />
        <label>
          phone:
          <input type="text" name="phone" value={personalinfo.phone} onChange={handleChange} />
        </label>
      <br/>

        <br />
        <label>
          Linkedin:
          <input type="text" name="Linkedin" value={personalinfo.Linkedin} onChange={handleChange} />
        </label>
        <br />
      <br/>
        
        <label>
          description: <br />
          <textarea type="text" name="description" value={personalinfo.description} onChange={handleChange} />
        </label>
        <br />
    
    </div>
    <br/>
    <button className='add-btn' type="submit">Soumettre</button>
     </form>
  )}
       </section>
     </>
    );
          };
export default Personalinfo;  
