import React, { useState, useEffect } from "react";
import "./calculator.css";

const CRScalculator = () => {
  const [dob, setDob] = useState("");
  const [qualificationLevel, setQualificationLevel] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [ieltsProficiency, setIeltsProficiency] = useState("");
  const [spouseLanguageLevel, setSpouseLanguageLevel] = useState("");
  const [academicYearsInCanada, setAcademicYearsInCanada] = useState(false);
  const [spouseAcademicYearsInCanada, setSpouseAcademicYearsInCanada] =useState(false);
  const [workInCanada, setWorkInCanada] = useState(false);
  const [spouseWorkInCanada, setSpouseWorkInCanada] = useState(false);
  const [validJobOffer, setValidJobOffer] = useState(false);
  const [relativeInCanada, setRelativeInCanada] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nearestWayTogoOffice, setNearestWayTogoOffice] = useState("");

  const [crsScore, setCrsScore] = useState(null);

  const [doberr,setdoberr] = useState("");
  const [nameerr, setnameerr] = useState("");
  const [phnoerr, setphnoerr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [officeerr,setofficeerr] = useState("");
  const [fetchError, setFetchError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isError = false;
  
   
    if (!dob) {
      setdoberr("Date of birth is required");
      isError = true; 
    } else {
      setdoberr("");
    }
  
    
    if (!name) {
      setnameerr("Name is required");
      isError = true; 
    } else {
      setnameerr("");
    }
  
   
    if (!email || !email.match("^[0-9a-zA-Z_%!()]+\\@[a-z]+\\.[a-z]{2,4}$")) {
      setemailerr("Email is not valid");
      isError = true; 
    } else {
      setemailerr("");
    }
  
    
    if (!phoneNumber || !phoneNumber.match("^[1-9][0-9]{9}$")) {
      setphnoerr("Mobile number is not entered or entered incorrect");
      isError = true; 
    } else {
      setphnoerr("");
    }
  
   
    if (!nearestWayTogoOffice) {
      setofficeerr("Please select an option above");
      isError = true;
    } else {
      setofficeerr("");
    }
  
  
    if (!isError) {
        try {
          const response = await fetch('http://localhost:4000/CRScalculator', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              dob,
              qualificationLevel,
              workExperience,
              ieltsProficiency,
              spouseLanguageLevel,
              academicYearsInCanada,
              spouseAcademicYearsInCanada,
              workInCanada,
              spouseWorkInCanada,
              validJobOffer,
              relativeInCanada,
              name,
              email,
              phoneNumber,
              nearestWayTogoOffice
            })
          });
  
          if (!response.ok) {
            throw new Error('Failed to save data');
          }
  
          const data = await response.json();
          // Calculate CRS score
          const score = calculateCRSScore(data);
          console.log("The data submitted successfully");
          setCrsScore(score);
          console.log("Data ",data);
          console.log("CRS Score:", score);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/CRScalculator');
          if (!response.ok) {
            throw new Error('Failed to fetch data for CRS calculation');
          }
          const data = await response.json();
          console.log("Fetched data:", data);
          setCrsScore(calculateCRSScore(data));
        } catch (error) {
          console.error('Error fetching data:', error);
          setFetchError(error.message);
        }
      };
  
      fetchData();
    }, []);
  
  const calculateCRSScore = (formData) => {
    let score = 0;

    // Age factor
    if (formData.age >= 20 && formData.age <= 29) {
        score += 110;
    } else if (formData.age >= 30 && formData.age <= 39) {
        score += 100;
    } else if (formData.age >= 40 && formData.age <= 49) {
        score += 90;
    } else if (formData.age >= 50) {
        score += 80;
    }

    // Education level factor
    switch (formData.educationLevel) {
        case 'Doctoral':
            score += 150;
            break;
        case 'Masters':
            score += 135;
            break;
        case 'PostSecondaryThree':
            score += 120;
            break;
        case 'PostSecondaryTwo':
            score += 105;
            break;
        case 'PostSecondaryOne':
            score += 90;
            break;
        case 'HighSchool':
            score += 30;
            break;
        default:
            break;
    }

    // Language proficiency factor
    switch (formData.languageProficiency) {
        case 'High':
            score += 128;
            break;
        case 'Moderate':
            score += 116;
            break;
        case 'Basic':
            score += 106;
            break;
        case 'None':
            score += 0;
            break;
        default:
            break;
    }

    // Work experience factor
    switch (formData.workExperience) {
        case '1':
            score += 40;
            break;
        case '2-3':
            score += 50;
            break;
        case '4-5':
            score += 60;
            break;
        case '6+':
            score += 70;
            break;
        default:
            break;
    }

    // Canadian education factor
    if (formData.canadianEducation) {
        score += 30;
    }

    // Job offer factor
    if (formData.jobOffer) {
        score += 50;
    }

    // Provincial nomination factor
    if (formData.provincialNomination) {
        score += 600; // This is just a hypothetical high score, actual scores may vary
    }

    // Canadian relatives factor
    if (formData.canadianRelative) {
        score += 15;
    }

    return score;
};


  return (
    <div>
     
     <form className="form" action="/CRScalculator" method="POST" onSubmit={handleSubmit}>
     <h2 style={{marginTop:'200px'}}>CRS Calculator Form</h2>
        <h2>WayTogo CRS Calculator Form</h2>
        <p style={{ fontWeight: "bold", lineHeight: "1.5", letterSpacing: "1px" }}>WayTogo's exclusive CRS calculator helps you find your Comprehensive Ranking System points out of 100. CRS points are calculated based on six factors such as Language, Education, Work Experience, Age, Arranged Employment in Canada, and Adaptability. Once you’re done, our immigration experts will offer you the best assistance and help you find the best Permanent Residence pathway. Start now!</p>
     
        <div>
          <div className="form-title">Date of Birth</div>
          <input className="form-data"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
           <div className={`error ${setdoberr?'show':'hide'}`} >{setdoberr}</div>
        </div>

        <div>
          <div className="form-title">Highest Qualification Level</div>
          <select className="form-data"
            value={qualificationLevel}
            onChange={(e) => setQualificationLevel(e.target.value)} required
          >
            <option value="">Select...</option>
            <option value="Doctoral">
              University degree at the Doctoral (PhD) level
            </option>
            <option value="Masters">
              University degree at the Master’s level or University level
              entry-to-practice professional degree
            </option>
            <option value="PostSecondaryThree">
              Canadian post-secondary degree or diploma for a program of three
              years or longer, or equal
            </option>
            <option value="PostSecondaryTwo">
              Canadian post-secondary degree or diploma for a two-year program,
              or equal
            </option>
            <option value="PostSecondaryOne">
              Canadian post-secondary degree or diploma for a one-year program,
              or equal
            </option>
            <option value="HighSchool">
              Canadian high school diploma, or equal
            </option>
          </select>
        </div>

        <div>
          <div className="form-title">Work Experience</div>
          <select className="form-data"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)} required
          >
            <option value="">Select...</option>
            <option value="1">1 year</option>
            <option value="2-3">2-3 years</option>
            <option value="4-5">4-5 years</option>
            <option value="6+">6 years or more</option>
          </select>
        </div>

        <div>
          <div className="form-title">IELTS Proficiency</div>
          <select className="form-data"
            value={ieltsProficiency}
            onChange={(e) => setIeltsProficiency(e.target.value)} required
          >
            <option value="">Select...</option>
            <option value="high">
              High proficiency: IELTS- (S,R,W-7,L-8) or Higher
            </option>
            <option value="moderate">
              Moderate proficiency: IELTS- (S,R,W-6.5,L-7.5) or Higher
            </option>
            <option value="basic">
              Basic proficiency: IELTS- 6 in all bands(L,R,S,W)
            </option>
            <option value="none">
              No proficiency: IELTS- 0 in all bands(L,R,S,W)
            </option>
          </select>
        </div>

        <div>
          <div className="form-title">Spouse Language Level</div>
          <select className="form-data"
            value={spouseLanguageLevel}
            onChange={(e) => setSpouseLanguageLevel(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="bachelor">Im not married</option>
            <option value="basic">Basic proficiency</option>
            <option value="none">No proficiency</option>
          </select>
        </div>

        <div>
          <div className="form-title">Have you Completed Academic Years in Canada</div>
          <input className="form-data"
            type="checkbox"
            checked={academicYearsInCanada}
            onChange={() => setAcademicYearsInCanada(!academicYearsInCanada)}
          />
        </div>

        <div>
          <div className="form-title">has your Spouse Completed Academic Years in Canada</div>
          <input className="form-data"
            type="checkbox"
            checked={spouseAcademicYearsInCanada}
            onChange={() =>
              setSpouseAcademicYearsInCanada(!spouseAcademicYearsInCanada)
            }
          />
        </div>

        <div>
          <div className="form-title">Have you Worked in Canada</div>
          <input className="form-data"
            type="checkbox"
            checked={workInCanada}
            onChange={() => setWorkInCanada(!workInCanada)}
          />
        </div>

        <div>
          <div className="form-title">Has your Spouse Worked in Canada</div>
          <input className="form-data"
            type="checkbox"
            checked={spouseWorkInCanada}
            onChange={() => setSpouseWorkInCanada(!spouseWorkInCanada)}
          />
        </div>

        <div>
          <div className="form-title">Do yoy have any Valid Job Offer in Canada</div>
          <input className="form-data"
            type="checkbox"
            checked={validJobOffer}
            onChange={() => setValidJobOffer(!validJobOffer)}
          />
        </div>

        <div>
          <div className="form-title">Do you have Relative in Canada</div>
          <input className="form-data"
            type="checkbox"
            checked={relativeInCanada}
            onChange={() => setRelativeInCanada(!relativeInCanada)}
          />
        </div>

        <div>
          <div className="form-text">Name</div>
          <input className="form-box" style={{width:'50%'}}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className={`error ${setnameerr?'show':'hide'}`} >{setnameerr}</div>
        </div>
        <div>
          <div className="form-text">Email</div>
          <input className="form-box"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <div className={`error ${setemailerr?'show':'hide'}`} >{setemailerr}</div>
        </div>
        <div>
          <div className="form-number">Phone Number</div>
          <input className="form-box"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
           <div className={`error ${setphnoerr?'show':'hide'}`} >{setphnoerr}</div>
        </div>
        <div>
          <div className="form-title">Nearest WayTogo Office</div>
          <select className="form-data"
            value={nearestWayTogoOffice}
            onChange={(e) => setNearestWayTogoOffice(e.target.value)}
          >
            <option value="">--please choose an option below--</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Trichy">Trichy</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kochi">Kochi</option>
            <option value="Chennai">Chennai</option>
            <option value="Madurai">Madurai</option>
            <option value="Salem">Salem</option>
          </select>
          <div className={`error ${setofficeerr?'show':'hide'}`} >{setofficeerr}</div>
        </div>

        <button type="submit" id="form-btn">Submit</button>

        <div>
          <h2>CRS Score</h2>
          <p className="form-score">Your CRS score is: {crsScore} /1600</p>
        </div>
      </form>
    </div>
  );
};

export default CRScalculator;
