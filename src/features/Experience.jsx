/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
const Experience = ({sendData}) => {
  const [experiences, setExperiences] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [workType, setWorkType] = useState("");
  const [contract, setContract] = useState("");
  const [startDate, SetStartDate] = useState("");
const [endDate, setEndDate] = useState("");



  function handleExperiences() {
    setExperiences([
      ...experiences,
      {
        company: company,
        role: role,
        location: location,
        workType: workType,
        contract: contract,
        startDate: startDate,
        endDate: endDate,
      },
    ]);

    setCompany("");
    setRole("");
    setLocation("");
    setWorkType("");
    setContract("");
    SetStartDate("");
    setEndDate("");
  }

  const [isHide, setIsHide] = useState(false);
  const labelStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
sendData(experiences);
  return (
    <>
      <section className="skills-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Experience</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <div className="experience-area">
            <label style={labelStyle}>Company name</label>
            <input
              type="text"
              placeholder="Ex: Atos "
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />

            <label style={labelStyle}>Role </label>
            <input
              type="text"
              placeholder="Ex: Full-stack Developer "
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />

            <label style={labelStyle}>Location </label>
            <input
              type="text"
              placeholder="Ex: Kenitra, Morocco "
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />

            <label style={labelStyle}>Type </label>
            <input
              type="text"
              placeholder="Ex: Remote , Hybrid, Site "
              value={workType}
              onChange={(e) => {
                setWorkType(e.target.value);
              }}
            />

            <label style={labelStyle}>Contract </label>
            <input
              type="text"
              placeholder="Ex: Full-Time , Part-Time, Intership "
              value={contract}
              onChange={(e) => {
                setContract(e.target.value);
              }}
            />

            <label style={labelStyle}>Start date</label>
            <input
              type="date"
              id="date"
              value={startDate}
              onChange={(e) => {
                SetStartDate(e.target.value);
              }}
            />

            <label style={labelStyle}>End date</label>
            <input
              type="date"
              id="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />

            <button className="add-btn" onClick={handleExperiences}>
              <span>
                <FiPlus />
              </span>
              <span>Add Experience</span>
            </button>

            <div className="Language-list">
              {/* You can display the list of languages here */}
              {experiences.map((exper, index) => (
                <div key={index}>
                  {exper.role} 
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Experience;
