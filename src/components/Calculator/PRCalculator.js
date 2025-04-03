import React, { useState } from "react";

import "./prcalculator.css";

const PRCalculator = () => {
 
  const [age, setAge] = useState("");
  const [englishProficiency, setEnglishProficiency] = useState("");
  const [overseasWorkExperience, setOverseasWorkExperience] = useState("");
  const [australianWorkExperience, setAustralianWorkExperience] = useState("");
  const [education, setEducation] = useState("");
  const [otherFactors, setOtherFactors] = useState("");
  const [sponsorshipsAndNominations, setSponsorshipsAndNominations] =
    useState("");
  const [visaSubclass, setVisaSubclass] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nearestWayTogoOffice, setNearestWayTogoOffice] = useState("");
  const [city, setCity] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  
      if (name && email && city && phone) {
        const response = await fetch("http://localhost:4000/PRcalculator", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            age: age,
            englishProficiency: englishProficiency,
            overseasWorkExperience: overseasWorkExperience,
            australianWorkExperience: australianWorkExperience,
            education: education,
            otherFactors: otherFactors,
            sponsorshipsAndNominations: sponsorshipsAndNominations,
            visaSubclass: visaSubclass,
            name: name,
            email: email,
            phone: phone,
            nearestWayTogoOffice: nearestWayTogoOffice,
            city: city,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to save data");
        } else {
     
          const data = await response.json();
          console.log(data);
          const score = calculateTotalPoints();
          setTotalPoints(score);
          console.log("PR SCORE : ", score);

          console.log("Data saved successfully");
          setTotalPoints(score);
          console.log("PR SCORE : ", score);
        }
      } else {
    
        console.log("Error: All fields are required");
      }
    } catch (error) {
     
      console.log("Error:", error);
    }
  };

  const calculateTotalPoints = () => {

    let agePoints = 0;
    switch (age) {
      case "18-24":
        agePoints = 25;
        break;
      case "25-32":
        agePoints = 30;
        break;
      case "33-39":
        agePoints = 25;
        break;
      case "40-45":
        agePoints = 15;
        break;
      default:
        break;
    }

    
    let englishPoints = 0;
    switch (englishProficiency) {
      case "Competent English (IELTS 6/OET C)":
        englishPoints = 0;
        break;
      case "Adept English (IELTS 7/OET B)":
        englishPoints = 10;
        break;
      case "Superior English (IELTS 8/OET A)":
        englishPoints = 20;
        break;
      default:
        break;
    }

   
    let workExperiencePoints = 0;
   
    switch (overseasWorkExperience) {
      case "3-5 years":
        workExperiencePoints += 5;
        break;
      case "5-8 years":
        workExperiencePoints += 10;
        break;
      case "8-10 years":
        workExperiencePoints += 15;
        break;
      default:
        break;
    }
   
    switch (australianWorkExperience) {
      case "1-3 years":
        workExperiencePoints += 5;
        break;
      case "3-5 years":
        workExperiencePoints += 10;
        break;
      case "5-8 years":
        workExperiencePoints += 15;
        break;
      case "8-10 years":
        workExperiencePoints += 20;
        break;
      default:
        break;
    }

  
    let educationPoints = 0;
    
    switch (education) {
      case "Doctorate degree":
        educationPoints = 20;
        break;
      case "Bachelor’s degree with Masters/honors":
        educationPoints = 15;
        break;
      case "Diploma and trade qualification":
      case "Australian diploma and trade qualification":
        educationPoints = 10;
        break;
      default:
        break;
    }

   
    let otherFactorsPoints = 0;
    
    if (otherFactors.includes("Community Language Qualifications")) {
      otherFactorsPoints += 5;
    }
    if (
      otherFactors.includes(
        "Study in regional Australia or Urban Area (excluding distance education)"
      )
    ) {
      otherFactorsPoints += 5;
    }
    if (otherFactors.includes("Partner Skill Qualifications")) {
      otherFactorsPoints += 5;
    }
    if (otherFactors.includes("Professional Year Completion")) {
      otherFactorsPoints += 5;
    }

    
    let sponsorshipsAndNominationsPoints = 0;
   
    switch (sponsorshipsAndNominations) {
      case "State or territory government (subclass 190)":
        sponsorshipsAndNominationsPoints = 5;
        break;
      case "Nomination by a state or Territory government or sponsorship by an eligible family member (subclass 489)":
        sponsorshipsAndNominationsPoints = 10;
        break;
      default:
        break;
    }

 
    let visaSubclassPoints = 0;
   
    switch (visaSubclass) {
      case "Skilled – Independent (subclass 189)":
        visaSubclassPoints = 20;
        break;
      case "Skilled – Sponsored (subclass 190)":
        visaSubclassPoints = 15;
        break;
      case "Skilled – Regional Sponsored (subclass 489)":
        visaSubclassPoints = 10;
        break;
      default:
        break;
    }

  
    const totalPoints =
      agePoints +
      englishPoints +
      workExperiencePoints +
      educationPoints +
      otherFactorsPoints +
      sponsorshipsAndNominationsPoints +
      visaSubclassPoints;

    setTotalPoints(totalPoints);

    return totalPoints;
  };

  return (
    <React.Fragment>
    <div className="prcalculator">
      <h1>PR Calculator for Australia</h1>

      <div className="australia-pr-calculator">
      <div className="input-section">
          <label className="question">Age:</label>
          <div className="options">
          <label>
            <input
              type="radio"
              name="age"
              value="18-24"
              checked={age === "18-24"}
              onChange={(e) => setAge(e.target.value)}
            />
            18 - 24
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="25-32"
              checked={age === "25-32"}
              onChange={(e) => setAge(e.target.value)}
            />
            25 - 32
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="33-39"
              checked={age === "33-39"}
              onChange={(e) => setAge(e.target.value)}
            />
            33 - 39
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="40-45"
              checked={age === "40-45"}
              onChange={(e) => setAge(e.target.value)}
            />
            40 - 45
          </label>
          </div>
        </div>
       
        <div className="input-section">
          <label className="question">English Language Requirements (IELTS/OET):</label>
          <div className="options">
            <label>
          <input
              type="radio"
              name="englishProficiency"
              value="Competent English (IELTS 6/OET C)"
              checked={
                englishProficiency === "Competent English (IELTS 6/OET C)"
              }
              onChange={(e) => setEnglishProficiency(e.target.value)}
            />
            Competent English (IELTS 6/OET C)
            </label>
          <label>
            <input
              type="radio"
              name="englishProficiency"
              value="Adept English (IELTS 7/OET B)"
              checked={englishProficiency === "Adept English (IELTS 7/OET B)"}
              onChange={(e) => setEnglishProficiency(e.target.value)}
            />
            Adept English (IELTS 7/OET B)
          </label>
          <label>
            <input
              type="radio"
              name="englishProficiency"
              value="Superior English (IELTS 8/OET A)"
              checked={
                englishProficiency === "Superior English (IELTS 8/OET A)"
              }
              onChange={(e) => setEnglishProficiency(e.target.value)}
            />
            Superior English (IELTS 8/OET A)
          </label>
          </div>
        </div>

    
            
        <label className="question">Work experience</label>
        <div className="options">
          <br />
          <label>
            <input
              type="radio"
              name="overseasWorkExperience"
              value="3-5 years"
              checked={overseasWorkExperience === "3-5 years"}
              onChange={(e) => setOverseasWorkExperience(e.target.value)}
            />
            At least 3 but less than 5 years (of past 10 years)
          </label>
          <label>
            <input
              type="radio"
              name="overseasWorkExperience"
              value="5-8 years"
              checked={overseasWorkExperience === "5-8 years"}
              onChange={(e) => setOverseasWorkExperience(e.target.value)}
            />
            At least 5 but less than 8 years (of past 10 years)
          </label>
          <label>
            <input
              type="radio"
              name="overseasWorkExperience"
              value="8-10 years"
              checked={overseasWorkExperience === "8-10 years"}
              onChange={(e) => setOverseasWorkExperience(e.target.value)}
            />
            At least 8 years and up to 10 years </label>
            </div>

         
          <label className="question">In Australia Work Experience:</label>
          <div className="options">
          <label>
            <input
              type="radio"
              name="australianWorkExperience"
              value="1-3 years"
              checked={australianWorkExperience === "1-3 years"}
              onChange={(e) => setAustralianWorkExperience(e.target.value)}
            />
            At least 1 but less than 3 years (of past 10 years)
          </label>
          <label>
            <input
              type="radio"
              name="australianWorkExperience"
              value="3-5 years"
              checked={australianWorkExperience === "3-5 years"}
              onChange={(e) => setAustralianWorkExperience(e.target.value)}
            />
            At least 3 but less than 5 years (of past 10 years)
          </label>
          <label>
            <input
              type="radio"
              name="australianWorkExperience"
              value="5-8 years"
              checked={australianWorkExperience === "5-8 years"}
              onChange={(e) => setAustralianWorkExperience(e.target.value)}
            />
            At least 5 but less than 8 years (of past 10 years)
          </label>
          <label>
            <input
              type="radio"
              name="australianWorkExperience"
              value="8-10 years"
              checked={australianWorkExperience === "8-10 years"}
              onChange={(e) => setAustralianWorkExperience(e.target.value)}
            />
            At least 8 years and up to 10 years
          </label>
         
       </div>

          <div className="criterion">
            <label className="question">Education:</label>
          <div className="options">
            
            <label>
              <input
                type="radio"
                name="education"
                value="Doctorate degree"
                checked={education === "Doctorate degree"}
                onChange={(e) => setEducation(e.target.value)}
              />
              Doctorate degree from any Australian educational institution or any other equivalent to it.
            </label>
            <label>
              <input
                type="radio"
                name="education"
                value="Bachelor’s degree with Masters/honors"
                checked={education === "Bachelor’s degree with Masters/honors"}
                onChange={(e) => setEducation(e.target.value)}
              />
              At least a bachelor’s degree inclusive of Masters/honors form an Australian university or any other equivalent to it.
            </label>
            <label>
              <input
                type="radio"
                name="education"
                value="Diploma and trade qualification"
                checked={education === "Diploma and trade qualification"}
                onChange={(e) => setEducation(e.target.value)}
              />
              Diploma and trade qualification completed in Australia or qualification or an award of recognized standards.
            </label>
            <label>
              <input
                type="radio"
                name="education"
                value="Australian diploma and trade qualification"
                checked={
                  education === "Australian diploma and trade qualification"
                }
                onChange={(e) => setEducation(e.target.value)}
              />
              Australian diploma and trade qualification awarded by Australian
              educational institution and meet Australian study requirements.
            </label>
          </div>
          </div>

          <div className="criterion">
            <label className="question">Other Factors:</label>
          <div className="options">
        
            <label>
              <input
                type="checkbox"
                name="communityLanguageQualifications"
                value="Community Language Qualifications"
                checked={otherFactors.includes(
                  "Community Language Qualifications"
                )}
                onChange={(e) => setOtherFactors(e.target.value)}
              />
              Credential community language qualifications
            </label>
            <label>
              <input
                type="checkbox"
                name="studyLocation"
                value="Study in regional Australia or Urban Area (excluding distance education)"
                checked={otherFactors.includes(
                  "Study in regional Australia or Urban Area (excluding distance education)"
                )}
                onChange={(e) => setOtherFactors(e.target.value)}
              />
              Study in regional Australia or Urban Area (excluding distance
              education)
            </label>
            <label>
              <input
                type="checkbox"
                name="partnerSkillQualifications"
                value="Partner Skill Qualifications"
                checked={otherFactors.includes("Partner Skill Qualifications")}
                onChange={(e) => setOtherFactors(e.target.value)}
              />
              Partner skill qualifications
            </label>
            <label>
              <input
                type="checkbox"
                name="professionalYearCompletion"
                value="Professional Year Completion"
                checked={otherFactors.includes("Professional Year Completion")}
                onChange={(e) => setOtherFactors(e.target.value)}
              />
              Professional year completion for a period of minimum 12 months in
              four years
            </label>
          </div>
          </div>

          <div className="criterion">
            <label className="question">Sponsorships and Nominations:</label>
          <div className="options">
            <label>
              <input
                type="radio"
                name="sponsorshipsAndNominations"
                value="State or territory government (subclass 190)"
                checked={
                  sponsorshipsAndNominations ===
                  "State or territory government (subclass 190)"
                }
                onChange={(e) => setSponsorshipsAndNominations(e.target.value)}
              />
              State or territory government (only visa subclass 190)
            </label>
            <label>
              <input
                type="radio"
                name="sponsorshipsAndNominations"
                value="Nomination by a state or Territory government or sponsorship by an eligible family member (subclass 489)"
                checked={
                  sponsorshipsAndNominations ===
                  "Nomination by a state or Territory government or sponsorship by an eligible family member (subclass 489)"
                }
                onChange={(e) => setSponsorshipsAndNominations(e.target.value)}
              />
              Nomination by a state or Territory government or sponsorship by an
              eligible family member (only visa subclass 489)
            </label>
          </div>
          <div className="criterion">
           <label className="question">Other Essential Information:</label> 
            <br />
            <label>
              <input
                type="radio"
                name="visaSubclass"
                value="Skilled – Independent (subclass 189)"
                checked={
                  visaSubclass === "Skilled – Independent (subclass 189)"
                }
                onChange={(e) => setVisaSubclass(e.target.value)}
              />
              Skilled – Independent (subclass 189)
            </label>
            <label>
              <input
                type="radio"
                name="visaSubclass"
                value="Skilled – Sponsored (subclass 190)"
                checked={visaSubclass === "Skilled – Sponsored (subclass 190)"}
                onChange={(e) => setVisaSubclass(e.target.value)}
              />
              Skilled – Sponsored (subclass 190)
            </label>
            <label>
              <input
                type="radio"
                name="visaSubclass"
                value="Skilled – Regional Sponsored (subclass 489)"
                checked={
                  visaSubclass === "Skilled – Regional Sponsored (subclass 489)"
                }
                onChange={(e) => setVisaSubclass(e.target.value)}
              />
              Skilled – Regional Sponsored (subclass 489)
            </label>
          </div>
          </div>
      
          </div>
          
          <form onSubmit={handleSubmit} method="POST" action="/PRcalculator">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Nearest WayTogo Office:</label>
              <select
                value={nearestWayTogoOffice}
                onChange={(e) => setNearestWayTogoOffice(e.target.value)}
                required
              >
                <option value="--">--please choose an option below--</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Trichy">Trichy</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kochi">Kochi</option>
                <option value="Chennai">Chennai</option>
                <option value="Madurai">Madurai</option>
                <option value="Salem">Salem</option>
              </select>
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                value={city}
                name="city"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <br/>

            <button type="submit">Check now</button>
          </form>
          <br/>
          <h2>Calculated PR Score: </h2>
          <div style={{fontWeight:'bolder',fontSize:"30px",color:"aqua"}}>Total Points: {totalPoints}</div>
        </div>
  
    </React.Fragment>
  
  );
};

export default PRCalculator;
