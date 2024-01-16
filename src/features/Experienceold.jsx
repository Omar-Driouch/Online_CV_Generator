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



  function handleExperiences(e) {
    e.preventDefault();
    setExperiences([
      ...experiences,
      {
        company: company,
        role: role,
        location: location,
        workType: workType,
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

  const [isHide, setIsHide] = useState(true);
sendData(experiences);
console.log(experiences);
  return (
    <>
      <section className="experiences-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Experience</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <form onSubmit={handleExperiences}>
            <div className="d-flex flex-wrap gap-3 justify-content-start align-items-end">
            <div className="mb-3">
              <label>Company name</label>
              <input
                type="text"
                placeholder="Ex: Atos "
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label>Role </label>
              <input
                type="text"
                placeholder="Ex: Full-stack Developer "
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label>Location </label>
              <input
                type="text"
                placeholder="Ex: Kenitra, Morocco "
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label>Type </label>
              <input
                type="text"
                placeholder="Ex: Remote , Hybrid, Site "
                value={workType}
                onChange={(e) => {
                  setWorkType(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label>Contract </label>
              <input
                type="text"
                placeholder="Ex: Full-Time , Part-Time, Intership "
                value={contract}
                onChange={(e) => {
                  setContract(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label>Start date</label>
              <input
                type="date"
                id="date"
                value={startDate}
                onChange={(e) => {
                  SetStartDate(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label>End date</label>
              <input
                type="date"
                id="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </div>
            </div>
            <button className="add-btn" type="submit">
              <span>
                <FiPlus />
              </span>
              <span>Add Experience</span>
            </button>
          </form>
        )}
            <div className="experiences-list">
              {experiences.map((exper, index) => (
                <div key={index}>
                  {exper.role} 
                </div>
              ))}
            </div>
      </section>
    </>
  );
};

export default Experience;
