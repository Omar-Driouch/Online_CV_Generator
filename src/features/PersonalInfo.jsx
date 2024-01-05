import React, {useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
//import Information from './Information';

function Personalinfo(){
  const [isHide, setIsHide] = useState(false);
        const [formData, setFormData] = useState({
          nom: '',
          prenom:'',
          profil:'',
          email: '',
          phone: '',
          adresse: '',
          adresse:'',
          description :'',
        });
    const [submitted, setSubmitted] = useState(false);
      
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };   

          const handleSubmit = (e) => {
            e.preventDefault();
            setSubmitted(true);
          };
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
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
          <br />
      <br/>

          Prenom:
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />

        </label>
        <br />
      <br/>

        <label>
          Profil:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
      <br/>
       
        <label>
          email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <br/>
    
        <label>
          adresse:
        
      <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
        </label>
      <br/>

        <br />
        <label>
          phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
      <br/>

        <br />
        <label>
          Linkedin:
          <input type="text" name="Linkedin" value={formData.Linkedin} onChange={handleChange} />
        </label>
        <br />
      <br/>
        
        <label>
          description: <br />
          <textarea type="text" name="description" value={formData.description} onChange={handleChange} />
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
