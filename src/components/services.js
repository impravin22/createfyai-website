
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

  {/* Begin AI Revolution Section */}
  <br/><br/><hr style={{color: 'gray'}}/><br/><br/>
  <div className="ai-revolution-section">
    <h2 className="ai-revolution-title">Be Ahead in AI Revolution</h2>
    
    <div className="tabs-container">
      {/* Tab 1 - Large Language Models */}
      <div className="tab-item">
        <img 
          src="/Users/kumarpr/Desktop/Projects/createfyai-website/WayTogo_web_using_react/abroad_consultancy/public/createfyAI_images/Services/llms.png" 
          alt="Large Language Models" 
          className="tab-image"
        />
        <h3 className="tab-title">Large Language Models</h3>
        <p className="tab-content">
          Leverage state-of-the-art language models to enhance your business operations. 
          Our LLM solutions enable natural language processing, content generation, 
          and intelligent automation for a wide range of applications.
        </p>
      </div>
      
      {/* Tab 2 - Computer Vision */}
      <div className="tab-item">
        <img 
          src="/createfyAI_images/Services/computervision.png" 
          alt="Computer Vision" 
          className="tab-image"
        />
        <h3 className="tab-title">Computer Vision</h3>
        <p className="tab-content">
          Transform how you interact with visual data using our advanced computer vision solutions.
          From image recognition to object detection and visual search, 
          unlock new insights and capabilities from your visual content.
        </p>
      </div>
      
      {/* Tab 3 - Agentic RAG */}
      <div className="tab-item">
        <img 
          src="/createfyAI_images/Services/AgenticRAG.png" 
          alt="Agentic RAG" 
          className="tab-image"
        />
        <h3 className="tab-title">Agentic RAG</h3>
        <p className="tab-content">
          Combine the power of retrieval-augmented generation with intelligent agents.
          Our Agentic RAG solutions provide more accurate, contextual, and reliable
          AI responses for your business needs.
        </p>
      </div>
      
      {/* Tab 4 - Data Processing */}
      <div className="tab-item">
        <img 
          src="/createfyAI_images/Services/Data_processing.png" 
          alt="Data Processing" 
          className="tab-image"
        />
        <h3 className="tab-title">Data Processing</h3>
        <p className="tab-content">
          Transform raw data into actionable insights with our advanced data processing solutions.
          We help organizations clean, transform, and analyze large datasets
          to drive better decision-making and business outcomes.
        </p>
      </div>
      
      {/* Tab 5 - Machine Learning */}
      <div className="tab-item">
        <img 
          src="/createfyAI_images/Services/MachineLearning.png" 
          alt="Machine Learning" 
          className="tab-image"
        />
        <h3 className="tab-title">Machine Learning</h3>
        <p className="tab-content">
          Harness the power of machine learning to automate processes and gain predictive insights.
          Our ML solutions help businesses identify patterns, make predictions,
          and optimize operations for improved performance.
        </p>
      </div>
      
      {/* Tab 6 - UI/UX Design */}
      <div className="tab-item">
        <img 
          src="/createfyAI_images/Services/UI_UX_design.png" 
          alt="UI/UX Design" 
          className="tab-image"
        />
        <h3 className="tab-title">UI/UX Design</h3>
        <p className="tab-content">
          Create exceptional user experiences with our UI/UX design expertise.
          We design intuitive, engaging, and accessible interfaces that delight users
          and drive adoption of your digital products.
        </p>
      </div>
    </div>
  </div>
  {/* End AI Revolution Section */}
    </div>
  );
};

export default Service;
