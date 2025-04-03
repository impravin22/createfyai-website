
import React ,{useEffect } from 'react';
import  '../css/destinations.css';

const handlePhoneCall = () => {
  
    window.open('tel:+91 8870203743');
};
const Destinations = () => {
    useEffect(() => {
        var coll = document.getElementsByClassName("collapsibles");
        var i;
      
        for (i = 0; i < coll.length; i++) {
         
          coll[i].nextElementSibling.style.display = "none";
      
          coll[i].addEventListener("dblclick", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }
      }, []); 
      

  const sectionStyle = {
    fontSize: '30px',
    color: 'black',
  
  };

  const glowStyle = {
    color: '#07968c',
    fontSize: '40px',
  };

  const sliderContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const picStyle = {
    height: '500px',
    width: '800px',
  };

  const flipCardStyle = {
    width: '300px',
    height: '300px',
    
  };
  
  return (
    <div>
        
    <section>
    <h1 className="glow" style={sectionStyle}>
          <span style={glowStyle}>Our </span>Destinations
        </h1>
        <h2 style={{ display: 'block', color: 'black', textAlign: 'center' }}>
          <span style={{ color: '#3FD2C7' }}>Graduate</span> from your dream country...
        </h2>
        <br />
        <div className='slider-container' style={sliderContainerStyle}>
          <img src="images/img2.jpg" alt="" style={picStyle} className="pic" />
          <img src="images/img5.jpg" alt="" style={picStyle} className="pic" />
          <img src="images/img7.jpg" alt="" style={picStyle} className="pic" />
          <img src="images/img9.jpg" alt="" style={picStyle} className="pic" />
        </div>

        <br />
        <h2 className="glow" style={{ fontSize:'30px', textAlign: 'center', paddingTop: '400px', color: 'black' }}>
          Lets help you live your dream...
        </h2>
        <div className="grid-container">

            <div className="flip-card" >
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                       
                        <img src="images/australia.jpg" alt="Australia" style={flipCardStyle}/>
                    </div>
                    <div className='flip-card-back'>
                    <div className ="small-box" >
                        <h1>Australia</h1>
                        <p> AUD 15,000 to AUD 33,000</p>
                        <p>AUD 20,000 to AUD 42,000</p>
                       
                    </div></div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="images/canada.jpg" alt="canada" style={flipCardStyle}/>
                    </div>
                    <div className="flip-card-back">
                    <div className ="small-box">
                        <h1>Canada </h1>
                        <p>CAD 13,000 to CAD 20,000</p>
                        <p>CAD 17,000 to CAD 25,000</p>
                        
                       
                    </div></div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="images/usa.jpg" alt="USA" style={flipCardStyle}/>
                    </div>
                    <div className="flip-card-back">
                    <div className ="small-box">
                        <h1>USA</h1>
                        <p>USD 20,000 to USD 40,000</p>
                        <p>USD 20,000 to USD 45,000</p>

                    </div></div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="images/ireland.jpg" alt="Ireland" style={flipCardStyle}/>
                    </div>
                    <div className="flip-card-back">
                    <div className ="small-box">
                        <h1>Ireland</h1>
                        <p>€9,850 to €25,500</p>
                        <p>€9,500 to €34,500</p>
                       
    
                        </div>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="images/france.jpg" alt="France" style={flipCardStyle}/>
                    </div>
                    <div className="flip-card-back">
                    <div className ="small-box">
                        <h1>France</h1>
                        <p>$2900 to $3900</p>
                        <p>$2900 to $5900</p>
                    </div></div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="images/new-zealand.jpg" alt="new zealand" style={flipCardStyle}/>
                    </div>
                    <div className="flip-card-back">
                    <div className ="small-box">
                        <h1>New Zealand</h1>
                        <p>NZD 20,500 to NZD 25,000</p>
                        <p>NZD 19,000 to NZD 29,000</p>
  
                    </div></div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="images/europe.jpg" alt="europe" style={flipCardStyle}/>
                    </div>
                    <div className="flip-card-back">
                    <div className ="small-box">
                        <h1>Europe</h1>
                        <p>INR 5L to INR 30L</p>
                        <p> INR 5L to INR 50L</p>
                    </div></div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="images/switchzerland.jpg" alt="switch" style={flipCardStyle}/>
                    </div>
                    <div className="flip-card-back">
                    <div className ="small-box">
                        <h1>Switzerland</h1>
                        <p>CHF 3,000 to CHF 13,000</p>
                        <p>CHF 4,000 to CHF 18,000</p>
                    </div></div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="images/england.jpg" alt="uk" style={flipCardStyle}/>
                    </div>
                    <div className="flip-card-back">
                    <div className ="small-box">
                        <h1>UK</h1>
                        <p>£10,000 to £20,000</p>
                        <p>£10,000 to £20,000 </p>
                       
                    </div></div>
                </div>
            </div>

        </div>
        <br/><br/>
        <section id="countries">
        <h2> Countries highlights...</h2>

        <button type="button" className="collapsibles">Study in Australia</button>
        <div className="content-con">
        <ul style={{textAlign: 'left'}}>
                            <li>Variety of courses</li>
                            <li>Multiple scholarship programs</li>
                            <li>World-class education</li>
                            <li>Affordable living</li>
                            <li>Technologically Advanced courses</li>
                        </ul>
        </div>

        <button type="button" className="collapsibles">Study in the UK</button>
        <div className="content-con">
        <ul style={{textAlign: 'left'}}>
                            <li>Academic Excellence</li>
                            <li>Superior Courses</li>
                            <li>Internationally Recognized Universities</li>
                            <li>Post-study Job Opportunities</li>
                            <li>Great Research Opportunities</li>
                            <li>Diverse Culture</li>
                            <li>Good Quality of Life</li>
                        </ul>
        </div>

        <button type="button" className="collapsibles">Study in the US</button>
        <div className="content-con">
        <ul style={{textAlign: 'left'}}>
                            <li>Globally accepted degrees</li>
                            <li>Tensile education system</li>
                            <li>Study and earn simultaneously</li>
                            <li>Flexible scholarship programs</li>
                            <li>Amazing campus life</li>
                        </ul> 
        </div>

        <button type="button" className="collapsibles">Study in Canada</button>
        <div className="content-con">
        <ul style={{textAlign: 'left'}}>
                           <li>Scholastic excellence</li> 
                            <li>Affordable fees</li>
                            <li>Focused approach on skill development</li>
                            <li>6th Safest country to live </li>
                            <li>Diversified culture</li>
                            <li>Post-study career opportunities</li>
                        </ul>
        </div>

        <button type="button" className="collapsibles">Study in Ireland</button>
        <div className="content-con">
        <ul style={{textAlign: 'left'}}>
                            <li>New age technology courses</li>
                            <li>Multiple work opportunities</li>
                            <li>Globally recognized Universities</li>
                            <li>Affordable cost of living</li>
                            <li>Earn while seeking higher education</li>
                         
                                  <li>Ample scholarship programs</li>
                            <li>Rich history and culture</li>
                        </ul> 
        </div>
        <button type="button" className="collapsibles">Study in New Zealand</button>
        <div className="content-con">
        <ul style={{textAlign: 'left'}}>
                            <li>Affordable tuition fee</li>
                            <li>Great scholarship programs</li>
                            <li>Good scope for Ph.D. scholars</li>
                            <li>Emphasis on innovation and research</li>
                             <li>2nd Safest country to live in according to Global Peace Index 2022</li>
                            <li>Accredited qualifications across the globe</li> 
                        </ul> 
        </div>
      </section>

        <div className="dest_info">
        <div className="info">
            <h1 style={{ fontSize: '24px', backgroundColor: 'rgb(111, 249, 244)', textAlign: 'center' }}>Where to Study...?Is that a doubt
            </h1>
            <p>Uncertain about which study destination to choose? Let us guide you towards the perfect fit! Embarking on
                a
                study abroad journey is a transformative experience. Rather than hastily selecting a destination, take a
                moment to conduct thorough research. It is essential to consider the advantages and disadvantages of the
                country where you intend to pursue your career. We understand that the decision-making process can be
                overwhelming, which is why here’s a list of popular destinations to study abroad:</p>
            <dt>
                Australia :
            <dd>Studying in Australia offers a vibrant and diverse academic environment with world-class universities
                and
                cutting-edge research opportunities. The country's high quality of education, stunning natural
                landscapes,
                and multicultural society make it an attractive destination for international students.</dd>
            </dt>
            <dt>
                The UK:
            <dd>The United Kingdom is renowned for its prestigious universities, rich academic traditions, and a global
                reputation for excellence. With a wide range of programs and a multicultural atmosphere, studying in the
                UK
                provides a transformative educational experience along with access to a diverse cultural and historical
                heritage.</dd>
            </dt>
            <dt>
                Canada:
            <dd>Canada is known for its welcoming and inclusive society, high-quality education, and emphasis on
                research
                and innovation. Studying in Canada provides access to world-class universities, a multicultural
                environment,
                and numerous post-study work and immigration opportunities for international students.</dd>
            </dt>
            <dt>The US:
            <dd>Studying in the United States opens doors to a vast array of educational opportunities, innovative
                research
                facilities, and a dynamic learning environment. The US higher education system offers a wide range of
                programs and resources, along with exposure to diverse cultures and a thriving student life.</dd>
            </dt>
            <dt>
                Ireland:
            <dd>Ireland's strong academic reputation, rich cultural heritage, and friendly community make it an
                attractive
                destination for international students. With its focus on research and innovation, studying in Ireland
                offers access to excellent educational institutions and a vibrant, welcoming atmosphere.</dd>
            </dt>
            <dt>
                New Zealand:
            <dd>New Zealand's pristine natural landscapes, high academic standards, and friendly environment make it a
                desirable destination for international students. With a strong emphasis on sustainability and
                research-based education, studying in New Zealand offers unique learning opportunities and a supportive
                multicultural society.</dd>
            </dt>

            <p>If you want to know more about studying abroad, get in touch with our international education experts at
                WayTogo... They will help you select the course, university and place for pursuing higher education.</p>
            <button type="button" onClick={handlePhoneCall}>Talk to a abroad expert</button>
        </div>
        </div>

        <div className="table-exam">
        <table>

            <thead>
                <tr>
                    <th>Country</th>
                    <th>English Proficiency</th>
                    <th>Undergraduate</th>
                    <th>Postgraduate</th>
                </tr>
                <br/>

            </thead>
            <tbody>
                <tr>
                    <td className="col-country">Australia</td>
                    <td>IELTS, TOEFL, PTE Academic</td>
                    <td>Varies by institution and program</td>
                    <td></td>
                </tr>
                <tr>
                    <td className="col-country">United Kingdom (UK)</td>
                    <td>IELTS, TOEFL, PTE Academic</td>
                    <td>SAT, ACT (for some programs)</td>
                    <td>GRE, GMAT (for some programs)</td>
                </tr>
                <tr>
                    <td className="col-country">Canada</td>
                    <td>IELTS, TOEFL, PTE Academic</td>
                    <td>SAT, ACT (for some programs)</td>
                    <td>GRE, GMAT (for some programs)</td>
                </tr>
                <tr>
                    <td className="col-country">United States (US)</td>
                    <td>IELTS, TOEFL, PTE Academic</td>
                    <td>SAT, ACT</td>
                    <td>GRE, GMAT (for some programs)</td>
                </tr>
                <tr>
                    <td className="col-country">Ireland</td>
                    <td>IELTS, TOEFL, PTE Academic</td>
                    <td>Varies; some programs may require GRE/GMAT</td>
                    <td>Varies; some programs may require GRE/GMAT</td>
                </tr>
                <tr>
                    <td className="col-country">New Zealand</td>
                    <td>IELTS, TOEFL, PTE Academic</td>
                    <td>Varies by institution and program</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </div>
    </section>
    </div>
  );
};

export default Destinations;
