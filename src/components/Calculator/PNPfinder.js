import React, { useState ,useEffect} from 'react';
import './pnp.css';


 const PNPfinder = () => {
    
        const [pnpData, setPnpData] = useState([]);
        const [selectedProvince, setSelectedProvince] = useState('');
        const [isExpressEntryLinked, setIsExpressEntryLinked] = useState('');
        const [isJobOfferRequired, setIsJobOfferRequired] = useState('');
    
        useEffect(() => {
            fetchPNPData();
        }, [selectedProvince, isExpressEntryLinked, isJobOfferRequired]);
    
        const fetchPNPData = () => {
            let url = 'http://localhost:4000/PNPfinder/';
    
            // Add query parameters based on user selections
            const queryParams = [];
            if (selectedProvince) {
                queryParams.push(`province=${selectedProvince}`);
            }
            if (isExpressEntryLinked) {
                queryParams.push(`expressEntryAligned=${isExpressEntryLinked}`);

            }
            if (isJobOfferRequired) {
                queryParams.push(`jobOfferRequired=${isJobOfferRequired}`);
            }
    
            if (queryParams.length > 0) {
                url += `?${queryParams.join('&')}`;
            }
    
            fetch(url)
                .then(response => response.json())
                .then(data => setPnpData(data))
                .catch(error => console.error('Error fetching PNP data:', error));
        };
    
        const handleProvinceTerritoryChange = event => {
            setSelectedProvince(event.target.value);
        };
    
        const handleExpressEntryLinkedChange = event => {
            setIsExpressEntryLinked(event.target.value);
        };
    
        const handleJobOfferRequiredChange = event => {
            setIsJobOfferRequired(event.target.value);
        };
    
    
  return (
    <div className='pnpfinder'>
      <div className='pnp-data'>
        <h1>Canada PNPfinder</h1>
        <img src="/images/canada_pnp.png" alt="img-canada" />
        <form>
          <div className='form-group'>
            <label htmlFor='provinceTerritory'>Province / Territory:</label>
            <select id='provinceTerritory' value={selectedProvince} onChange={handleProvinceTerritoryChange}>
              <option value=''>....Select Territory...</option>
              <option value ="Saskatchewan">Saskatchewan</option>
             <option value ="Yukon">Yukon</option>
             <option value ="British Columbia">British Columbia</option>
             <option value ="Qubec">Qubec</option>
             <option value ="Ontario">Ontario</option>
             <option value ="Northwest Territories">Northwest Territories</option>
             <option value ="Nova Scotia">Nova Scotia</option>
             <option value ="New Brunswick">New Brunswick</option>
             <option value ="Manitoba">Manitoba</option>
             <option value ="Alberta">Alberta</option>
             <option value ="Prince Edward Island">Prince Edward Island</option>
             <option value =" Newfoundland and Labrador"> Newfoundland and Labrador</option>
            
            </select>
          </div>

          

          <div className='form-group'>
            <label>Express Entry-Linked:</label>
            <div>
              <label>
                <input type='radio' name='expressEntryLinked' value='Yes' checked={isExpressEntryLinked === 'Yes'} onChange={handleExpressEntryLinkedChange} />
                Yes
              </label>
              <label>
                <input type='radio' name='expressEntryLinked' value='No' checked={isExpressEntryLinked === 'No'} onChange={handleExpressEntryLinkedChange} />
                No
              </label>
              <label>
                <input type='radio' name='expressEntryLinked' value="" checked={isExpressEntryLinked === ""} onChange={handleExpressEntryLinkedChange} />
                I Don't Know
              </label>
            </div>
          </div>

          <div className='form-group'>
            <label>Job Offer Required:</label>
            <div>
              <label>
                <input type='radio' name='jobOfferRequired' value='Yes' checked={isJobOfferRequired === 'Yes'} onChange={handleJobOfferRequiredChange} />
                Yes
              </label>
              <label>
                <input type='radio' name='jobOfferRequired' value='No' checked={isJobOfferRequired === 'No'} onChange={handleJobOfferRequiredChange} />
                No
              </label>
              <label>
                <input type='radio' name='jobOfferRequired' value="" checked={isJobOfferRequired === ""} onChange={handleJobOfferRequiredChange} />
                I Don't Know
              </label>
            </div>
          </div>
        </form>

      </div>
      <div className='tablefinder'>
            <h1>Narrow down your search with filters</h1>
<h3>Check the status of PNP programs you are looking for</h3>
            <table>
                <thead>
                    <tr>
                        <th>Province</th>
                        <th>Category</th>
                        <th>Express Entry Linked</th>
                        <th>Job Offer Required</th>
                    </tr>
                </thead>
                <tbody>
                    {pnpData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.province}</td>
                            <td>{item.category}</td>
                            <td>{item.expressEntryAligned}</td>
                            <td>{item.jobOfferRequired}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default PNPfinder;
