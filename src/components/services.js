
import React from 'react';
import '../css/services.css';
const Service = () => {
  return (
    <div>
      <h1 className="glow">Connect with us! Lets make your immigration story a memorable one.</h1>
  <h2 style={{textAlign: 'center',font: '3em sans-serif',color:'black',textShadow:'2px 5px rgba(51, 238, 123, 0.904)'}}>Our
      progress in achieving students dream over years</h2><br/>
  <div className="box-container">
      <div className="skill-progress">
          <b>CANADA</b>
          <div className="containers">
              <div className="skills a1">97%</div>
          </div><br/>

          <b>AUSTRALIA</b>
          <div className="containers">
              <div className="skills a2">92%</div>
          </div><br/>

          <b>IRELAND</b>
          <div className="containers">
              <div className="skills a3">88%</div>
          </div><br/>

          <b>USA</b>
          <div className="containers">
              <div className="skills a4">78%</div>
          </div><br/>

          <b>SWITZERLAND</b>
          <div className="containers">
              <div className="skills a5">62%</div>
          </div><br/>

          <b>GERMANY</b>
          <div className="containers">
              <div className="skills a6">50%</div>
          </div><br/>

          <b>ENGLAND</b>
          <div className="containers">
              <div className="skills a7">32%</div>
          </div><br/>

          <b>FRANCE</b>
          <div className="containers">
              <div className="skills a8">24%</div>
          </div><br/>
      </div>
      <h2 style={{textAlign: 'center',font: '3em sans-serif;color:black',textShadow:'2px 5px rgba(51, 238, 123, 0.904)' }}>
          Our Journey</h2>
      <div className="timeline">
          <div className="containert left1">
              <div className="contents">
                  <h2>2020</h2>
                  <p>Established our immigrant consultancy services, laying the foundation for helping students pursue
                      international studies. Initiated collaborations with universities worldwide.</p>
              </div>
          </div>
          <div className="containert right1">
              <div className="contents">
                  <h2>2018</h2>
                  <p>Expanded our reach and successfully assisted a significant number of students in their journey to
                      study abroad. Strengthened partnerships with educational institutions globally.</p>
              </div>
          </div>
          <div className="containert left1">
              <div className="contents">
                  <h2>2016</h2>
                  <p>Continued growth and diversified our services to provide comprehensive support for students
                      aiming to
                      study in various countries. Increased success stories and testimonials.</p>
              </div>
          </div>
          <div className="containert right1">
              <div className="contents">
                  <h2>2015</h2>
                  <p>Marked a significant milestone by achieving a higher success rate in student placements. Enhanced
                      our
                      team with experienced counselors and advisors.</p>
              </div>
          </div>
          <div className="containert left1">
              <div className="contents">
                  <h2>2013</h2>
                  <p>Started our journey in guiding and counseling students for international education. Early success
                      stories paved the way for a dedicated and passionate team.</p>
              </div>
          </div>
          <div className="containert right1">
              <div className="contents">
                  <h2>2007</h2>
                  <p>Founded the consultancy with a vision to provide expert guidance to aspiring students. Initial
                      steps
                      towards becoming a leading name in overseas education consultancy.</p>
              </div>
          </div>
      </div>
  </div>
  <br/><br/><hr style={{color: 'gray'}}/><br/><br/>
  <h2 style={{textAlign: 'center',font: '2em sans-serif',color:'black',textShadow:'2px 5px rgba(51, 238, 123, 0.904)'}}>Meet The Team</h2>
  
  <div className="our-employee">
  <div className="card">
      <img src="https://www.kindpng.com/picc/m/246-2466934_transparent-ceo-png-businessperson-png-download.png" alt="John" style={{width:'100%'}}/>
      <h1>Logan</h1>
      <p className="title">CEO & Founder, WayTogo</p>
      <p>Harvard University</p>
      <div style={{margin: '24px 0'}}>
      <a href="/"><i className="fa fa-dribbble"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
            <a href="/"><i className="fa fa-facebook"></i></a>
      </div>
      <p><button>Contact</button></p>
  </div>
 
      <div className="card">
          <img src="https://img.freepik.com/premium-photo/happy-woman-ceo-isolated-white-background-caucasian-woman-ceo-studio_474717-123517.jpg" alt="John" style={{width:'100%'}}/>
          <h1>Cassie </h1>
          <p className="title">President, WayTogo</p>
          <p>Harvard University</p>
          <div style={{margin: '24px 0'}}>
          <a href="/"><i className="fa fa-dribbble"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
            <a href="/"><i className="fa fa-facebook"></i></a>
          </div>
          <p><button>Contact</button></p>
      </div>

      <div className="card">
          <img src="http://progressivebenefit.com/wp-content/uploads/2016/05/isolated_CEO.png" alt="John" style={{width:'100%'}}/>
          <h1>Steve</h1>
          <p className="title">Vice-President, WayTogo</p>
          <p>Harvard University</p>
          <div style={{margin: '24px 0'}}>
          <a href="/"><i className="fa fa-dribbble"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
            <a href="/"><i className="fa fa-facebook"></i></a>
          </div>
          <p><button>Contact</button></p>
      </div>

      <div className="card">
          <img src="https://s3.amazonaws.com/cdn.uvamagazine.org/articles/2007/04-Winter/Research/CEO_OG.jpg" alt="John" style={{width:'100%'}}/>
          <h1>Sadie John</h1>
          <p className="title">Processing-officer, WayTogo</p>
          <p>Harvard University</p>
          <div style={{margin: '24px 0'}}>
          <a href="/"><i className="fa fa-dribbble"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
            <a href="/"><i className="fa fa-facebook"></i></a>
          </div>
          <p><button>Contact</button></p>
      </div>
  </div>
    </div>
  );
};

export default Service;
