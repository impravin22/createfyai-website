import React, { useState } from 'react';
import axios from 'axios';
import './admin.css'; 

const Admin = () => {
  const [programData, setProgramData] = useState({
    program: '',
    location: '',
    when: '',
    timing: '',
    seatCapacity: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'seatCapacity' ? parseInt(value, 10) : value;
    setProgramData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:4000/admin/data", programData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
      if (response.status === 200) {
        console.log("Program form submitted");
      }
      setProgramData({
        program: '',
        location: '',
        when: '',
        timing: '',
        seatCapacity: 0
      });
    } catch (error) {
      console.error("Error submitting program form:", error);
    }
  };
  

  return (
    <>
    <div className="admin-container">
    <h2>Welcome to Admin Page</h2><br/>
    <h3>Add your upcoming programs here</h3><br/>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label htmlFor="program">Program:</label>
        <input type="text" id="program" name="program" value={programData.program} onChange={handleChange} required />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={programData.location} onChange={handleChange} required />

        <label htmlFor="when">When:</label>
        <input type="text" id="when" name="when" value={programData.when} onChange={handleChange} required />

        <label htmlFor="timing">Timing:</label>
        <input type="text" id="timing" name="timing" value={programData.timing} onChange={handleChange} required />

        <label htmlFor="seatCapacity">Seat Capacity:</label>
        <input type="number" id="seatCapacity" name="seatCapacity" value={programData.seatCapacity} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Admin;
