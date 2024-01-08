import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const PersonalInfo = () => {
    const [isHide, setIsHide] = useState(false);
    const [personalinfo, setPersonalinfo] = useState([]);
    const [nom ,setNom] =useState("");
    const [prenom ,setPrenom] =useState("");
    const [profile ,setProfil] =useState("");
    const [email ,setEmail] =useState("");
    const [adresse ,setAdresse] =useState("");
    const [phone ,setPhone] =useState("");
    const [description ,setDescription] =useState("");
    const [image ,setImage] =useState("");

    const handleChangeImage = (e)=>{
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImage(imageUrl);
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setPersonalinfo([...personalinfo,{
            nom:nom,
            prenom:prenom,
            profile:profile,
            email:email,
            adresse:adresse,
            phone:phone,
            description:description,
            image:image
        }])
    }
  return (
     <section className="personal-info-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Personal information</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {isHide && 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="image">image</label>
                <input type="file" placeholder="chose image .." onChange={handleChangeImage}  />
            </div>
            <div className="mb-3">
                <label htmlFor="nom">nom</label>
                <input type="text" placeholder="entrer votre nom .." onChange={(e)=>{setNom(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label htmlFor="prenom">prenom</label>
                <input type="text" placeholder="entrer votre prenom .." onChange={(e)=>{setPrenom(e.target.value)}}   />
            </div>
            <div className="mb-3">
                <label htmlFor="profile">profile</label>
                <input type="text" placeholder="Ex : Fullstack Developper  .." onChange={(e)=>{setProfil(e.target.value)}}   />
            </div>
            <div className="mb-3">
                <label htmlFor="email">email</label>
                <input type="text" placeholder="Ex: nom@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label htmlFor="adresse">adresse</label>
                <input type="text" placeholder="Ex : Street Mohamed V apt 18 rabat" onChange={(e)=>{setAdresse(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label htmlFor="phone">phone</label>
                <input type="text" placeholder="Ex : 0689232549" onChange={(e)=>{setPhone(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label htmlFor="description">description</label>
                <textarea cols="30" rows="10" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            <button className="add-btn" type="submit">submit</button>
        </form>
    }
     </section>
  )
}

export default PersonalInfo