import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {BiImageAdd} from "react-icons/bi"
const PersonalInfo = ({sendData}) => {
    const [isHide, setIsHide] = useState(false);
    const [personalinfo, setPersonalinfo] = useState({});
    const [nom ,setNom] = useState("");
    const [prenom ,setPrenom] = useState("");
    const [profile ,setProfil] = useState("");
    const [email ,setEmail] = useState("");
    const [adresse ,setAdresse] = useState("");
    const [phone ,setPhone] = useState("");
    const [description ,setDescription] = useState("");
    const [image ,setImage] = useState();

    const handleChangeImage = (e)=>{
        const file = e.target.files[0];
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setImage(imageUrl);
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setPersonalinfo({...personalinfo,
            nom:nom,
            prenom:prenom,
            profile:profile,
            email:email,
            adresse:adresse,
            phone:phone,
            description:description,
            image:image
        })
        setNom("")
        setPrenom("")
        setProfil("")
        setEmail("")
        setAdresse("")
        setPhone("")
        setDescription("")
        setImage("")
    }
    
    // console.log(personalinfo);
    sendData(personalinfo);
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
            <div className="d-flex flex-wrap gap-3 justify-content-start align-items-end">
            <div className="mb-3 img-box">
                <label className="img-label" htmlFor="image">
                <BiImageAdd />
                </label>
                <input type="file" placeholder="chose image .." accept="image/*" onChange={handleChangeImage}  />
                {image && <img src={image} alt="#"/>}
            </div>
            <div className="mb-3">
                <label htmlFor="nom">nom</label>
                <input type="text" placeholder="entrer votre nom .." value={nom} onChange={(e)=>{setNom(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label htmlFor="prenom">prenom</label>
                <input type="text" placeholder="entrer votre prenom .." value={prenom} onChange={(e)=>{setPrenom(e.target.value)}}   />
            </div>
            <div className="mb-3">
                <label htmlFor="profile">profile</label>
                <input type="text" placeholder="Ex : Fullstack Developper  .." value={profile} onChange={(e)=>{setProfil(e.target.value)}}   />
            </div>
            <div className="mb-3">
                <label htmlFor="email">email</label>
                <input type="text" placeholder="Ex: nom@gmail.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label htmlFor="adresse">adresse</label>
                <input type="text" placeholder="Ex : Street Mohamed V apt 18 rabat" value={adresse} onChange={(e)=>{setAdresse(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label htmlFor="phone">phone</label>
                <input type="text" placeholder="Ex : 0689232549" value={phone} onChange={(e)=>{setPhone(e.target.value)}}  />
            </div>
            <div className="mb-3">
                <label htmlFor="description">description</label>
                <textarea cols="30" rows="1" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
       </div>
            <button className="add-btn" type="submit">submit</button>
        </form>
    }
     </section>
  )
}

export default PersonalInfo