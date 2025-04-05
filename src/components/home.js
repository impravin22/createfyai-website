import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";
import { T, useTranslation } from './Translation';

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [visibleSection, setVisibleSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  
  // Get translation function
  const { translate } = useTranslation();
  
  // State for AI solution tabs
  const [activeSolutionTab, setActiveSolutionTab] = useState('tab-agentic-rags');

  // Refs for all sections to track visibility
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const solutionsRef = useRef(null);
  const growthRef = useRef(null);
  const teamRef = useRef(null);
  const financialRef = useRef(null);
  const contactRef = useRef(null);

  // Handle scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Check each section's position
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'solutions', ref: solutionsRef },
        { id: 'growth', ref: growthRef },
        { id: 'team', ref: teamRef },
        { id: 'financial', ref: financialRef },
        { id: 'contact', ref: contactRef }
      ];
      
      // Find the current visible section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
          setVisibleSection(section.id);
          if (section.id !== 'hero') {
            setActiveTab(section.id);
          }
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle AI solution tabs functionality
  useEffect(() => {
    const handleTabChange = () => {
      // Get all tabs and tab panes
      const tabs = document.querySelectorAll('.ai-tab');
      const tabPanes = document.querySelectorAll('.ai-tab-pane');
      
      // Add click event listeners to each tab
      tabs.forEach(tab => {
        const input = tab.querySelector('input[type="radio"]');
        
        input.addEventListener('change', function() {
          // Remove active class from all tabs and tab panes
          tabs.forEach(t => t.classList.remove('active'));
          tabPanes.forEach(p => p.classList.remove('active'));
          
          // Add active class to current tab
          tab.classList.add('active');
          
          // Get the target tab content ID
          const targetId = this.id.replace('tab-', 'content-');
          
          // Show the corresponding tab content
          const targetPane = document.getElementById(targetId);
          if (targetPane) {
            targetPane.classList.add('active');
          }
          
          // Update active tab state
          setActiveSolutionTab(this.id);
        });
      });
    };
    
    // Initialize tabs
    handleTabChange();
    
    // Clean up event listeners on component unmount
    return () => {
      const inputs = document.querySelectorAll('.ai-tab input[type="radio"]');
      inputs.forEach(input => {
        input.removeEventListener('change', () => {});
      });
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form data submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };
  
  // Function to handle tab clicks for AI solutions
  const handleSolutionTabClick = (tabId) => {
    const tabInput = document.getElementById(tabId);
    if (tabInput) {
      tabInput.checked = true;
      
      // Trigger the change event manually
      const event = new Event('change', { bubbles: true });
      tabInput.dispatchEvent(event);
    }
  };

  return (
    <div className="bcg-style-container">
      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="hero-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2880,fit=crop/Aq2W0EP68Qc2ZLxz/960x0-A85e5zGKL5hZEKOE.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="hero-content">
          <h1><T keyPath="hero.title" /></h1>
          <p><T keyPath="hero.subtitle" /></p>
          <button onClick={() => scrollToSection('contact')}><T keyPath="hero.cta" /></button>
        </div>
      </section>

      {/* Strategies Section */}
      <section id="strategies-intro-section" className="strategies-intro-section">
        <div className="strategies-intro-container">
          <h2><T keyPath="strategies.title" /></h2>
          <p><T keyPath="strategies.subtitle" /></p>
        </div>
      </section>

      {/* Strategy Grid Section */}
      <section id="strategy-grid-section" className="strategy-grid-section">
        <div className="strategy-grid-container">
          <div className="strategy-grid-item">
            <div className="strategy-image">
              <img src="https://assets.zyrosite.com/Aq2W0EP68Qc2ZLxz/gyphy-chatbot-answers-and-questions-Aq2W2M79ZlFpgQoB.gif" alt="AI Chatbot" />
            </div>
            <div className="strategy-content">
              <h3><T keyPath="strategyGrid.item1.title" /></h3>
              <p><T keyPath="strategyGrid.item1.description" /></p>
            </div>
          </div>
          
          <div className="strategy-grid-item">
            <div className="strategy-image">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=scale-down/Aq2W0EP68Qc2ZLxz/avinftmarketer_create_a_cover_image_for_a_podcast_for_financi_260a3f46-e4a0-4b2e-8ea9-5d38df7654a8_3-YX4l471gyKhgR8KY.png" alt="Business Transformation" />
            </div>
            <div className="strategy-content">
              <h3><T keyPath="strategyGrid.item2.title" /></h3>
              <p><T keyPath="strategyGrid.item2.description" /></p>
            </div>
          </div>
          
          <div className="strategy-grid-item">
            <div className="strategy-image">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=scale-down/Aq2W0EP68Qc2ZLxz/image-7-AMq1q3lJeKFEpB4n.png" alt="Industry Solutions" />
            </div>
            <div className="strategy-content">
              <h3><T keyPath="strategyGrid.item3.title" /></h3>
              <p><T keyPath="strategyGrid.item3.description" /></p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Clients Section */}
      <section id="partners-section" className="partners-section" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2880,fit=crop/Aq2W0EP68Qc2ZLxz/avinftmarketer_create_a_cover_image_for_a_podcast_for_financi_8bde1b10-fe5f-405a-beec-36422e01149e_3-mjE7EpEJNru7kVL3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="partners-container">
          <h2><T keyPath="partners.title" /></h2>
          
          <div className="partners-logos">
            <div className="partner-logo">
              <img src={process.env.PUBLIC_URL + "/createfyAI_images/odintech.svg"} alt="Odintech" />
            </div>
            <div className="partner-logo">
              <img src={process.env.PUBLIC_URL + "/createfyAI_images/neurelli.svg"} alt="Neurelli AI" />
            </div>
            <div className="partner-logo">
              <img src={process.env.PUBLIC_URL + "/createfyAI_images/agoda.svg"} alt="Agoda" />
            </div>
            <div className="partner-logo">
              <img src={process.env.PUBLIC_URL + "/createfyAI_images/edelwess_air.svg"} alt="Edelweiss Air" />
            </div>
            <div className="partner-logo">
              <img src={process.env.PUBLIC_URL + "/createfyAI_images/magma.svg"} alt="Magma" />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach-section" className="createfy-approach-section">
        <div className="approach-container">
          <h2><T keyPath="approach.title" /></h2>
          
          <div className="approach-grid">
            <div className="approach-grid-item">
              <div className="approach-image">
                <img src="https://assets.zyrosite.com/Aq2W0EP68Qc2ZLxz/20250323_1705_innovative-team-collaboration_simple_compose_01jq140jyrext851jjj3rtpqe5-mjE7xPRReqsP4z6Z.gif" alt="Efficient Small Team" />
              </div>
              <div className="approach-content">
                <h3><T keyPath="approach.item1.title" /></h3>
                <p><T keyPath="approach.item1.description" /></p>
              </div>
            </div>
            
            <div className="approach-grid-item">
              <div className="approach-image">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,fit=scale-down/Aq2W0EP68Qc2ZLxz/595826b9-fde1-4f2f-8cd9-9df4fb537c57-AGB2qX5VDnCE30GK.png" alt="Owned & Operated by Developers" />
              </div>
              <div className="approach-content">
                <h3><T keyPath="approach.item2.title" /></h3>
                <p><T keyPath="approach.item2.description" /></p>
              </div>
            </div>
            
            <div className="approach-grid-item">
              <div className="approach-image">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=scale-down/Aq2W0EP68Qc2ZLxz/avinftmarketer_create_a_cover_image_for_a_podcast_for_financi_8bde1b10-fe5f-405a-beec-36422e01149e_1-YD0l0M0WO1HRv3Np.png" alt="On-Time Delivery" />
              </div>
              <div className="approach-content">
                <h3><T keyPath="approach.item3.title" /></h3>
                <p><T keyPath="approach.item3.description" /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Revolution Section - Tabbed Interface */}
      <section id="ai-revolution-section" className="ai-revolution-section">
        <div className="ai-revolution-container">
          <h2><T keyPath="aiRevolution.title" /></h2>
          <p className="ai-revolution-subtitle"><T keyPath="aiRevolution.subtitle" /></p>
          
          <div className="ai-tabs-container">
            <div className="ai-tabs">
              <div className={`ai-tab ${activeSolutionTab === 'tab-agentic-rags' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-agentic-rags" defaultChecked onChange={() => handleSolutionTabClick('tab-agentic-rags')} />
                <label htmlFor="tab-agentic-rags" onClick={() => handleSolutionTabClick('tab-agentic-rags')}>
                  <T keyPath="aiRevolution.tabs.agentic" />
                </label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-computer-vision' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-computer-vision" onChange={() => handleSolutionTabClick('tab-computer-vision')} />
                <label htmlFor="tab-computer-vision" onClick={() => handleSolutionTabClick('tab-computer-vision')}>
                  <T keyPath="aiRevolution.tabs.computerVision" />
                </label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-llms' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-llms" onChange={() => handleSolutionTabClick('tab-llms')} />
                <label htmlFor="tab-llms" onClick={() => handleSolutionTabClick('tab-llms')}>
                  <T keyPath="aiRevolution.tabs.llms" />
                </label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-data-engineering' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-data-engineering" onChange={() => handleSolutionTabClick('tab-data-engineering')} />
                <label htmlFor="tab-data-engineering" onClick={() => handleSolutionTabClick('tab-data-engineering')}>
                  <T keyPath="aiRevolution.tabs.dataEngineering" />
                </label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-ui-ux' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-ui-ux" onChange={() => handleSolutionTabClick('tab-ui-ux')} />
                <label htmlFor="tab-ui-ux" onClick={() => handleSolutionTabClick('tab-ui-ux')}>
                  <T keyPath="aiRevolution.tabs.uiUx" />
                </label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-machine-learning' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-machine-learning" onChange={() => handleSolutionTabClick('tab-machine-learning')} />
                <label htmlFor="tab-machine-learning" onClick={() => handleSolutionTabClick('tab-machine-learning')}>
                  <T keyPath="aiRevolution.tabs.machineLearning" />
                </label>
              </div>
            </div>
            
            <div className="ai-tab-content">
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-agentic-rags' ? 'active' : ''}`} id="content-agentic-rags">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3><T keyPath="aiRevolution.content.agentic.title" /></h3>
                    <p><T keyPath="aiRevolution.content.agentic.description" /></p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>
                        <T keyPath="aiRevolution.cta" />
                      </button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src={process.env.PUBLIC_URL + "/createfyAI_images/Services/AgenticRAG.png"} alt="RAG System Diagram" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-computer-vision' ? 'active' : ''}`} id="content-computer-vision">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3><T keyPath="aiRevolution.content.computerVision.title" /></h3>
                    <p><T keyPath="aiRevolution.content.computerVision.description" /></p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>
                        <T keyPath="aiRevolution.cta" />
                      </button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src={process.env.PUBLIC_URL + "/createfyAI_images/Services/computervision.png"} alt="Computer Vision Demo" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-llms' ? 'active' : ''}`} id="content-llms">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3><T keyPath="aiRevolution.content.llms.title" /></h3>
                    <p><T keyPath="aiRevolution.content.llms.description" /></p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>
                        <T keyPath="aiRevolution.cta" />
                      </button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src={process.env.PUBLIC_URL + "/createfyAI_images/Services/llms.png"} alt="LLM Architecture" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-data-engineering' ? 'active' : ''}`} id="content-data-engineering">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3><T keyPath="aiRevolution.content.dataEngineering.title" /></h3>
                    <p><T keyPath="aiRevolution.content.dataEngineering.description" /></p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>
                        <T keyPath="aiRevolution.cta" />
                      </button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src={process.env.PUBLIC_URL + "/createfyAI_images/Services/Data_processing.png"} alt="Data Pipeline Architecture" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-ui-ux' ? 'active' : ''}`} id="content-ui-ux">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3><T keyPath="aiRevolution.content.uiUx.title" /></h3>
                    <p><T keyPath="aiRevolution.content.uiUx.description" /></p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>
                        <T keyPath="aiRevolution.cta" />
                      </button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src={process.env.PUBLIC_URL + "/createfyAI_images/Services/UI_UX_design.png"} alt="UI/UX Design Process" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-machine-learning' ? 'active' : ''}`} id="content-machine-learning">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3><T keyPath="aiRevolution.content.machineLearning.title" /></h3>
                    <p><T keyPath="aiRevolution.content.machineLearning.description" /></p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>
                        <T keyPath="aiRevolution.cta" />
                      </button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src={process.env.PUBLIC_URL + "/createfyAI_images/Services/MachineLearning.png"} alt="Machine Learning Model Training" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Info Section - Integrated with World Map */}
      <section id="team-info-section" className="team-info-section">
        <div className="team-info-container">
          <h2><T keyPath="teamInfo.title" /></h2>
          <p className="team-info-text">
            <T keyPath="teamInfo.description" />
          </p>
          
          <div className="world-map">
            <img src={process.env.PUBLIC_URL + "/createfyAI_images/world_map.svg"} alt="World Map" style={{ maxWidth: '950px', width: '100%', margin: '20px auto' }}/>
          </div>
          
          <p className="team-locations">
            <T keyPath="teamInfo.locations" />
          </p>
        </div>
      </section>


      {/* Contact Form Section */}
      <section ref={contactRef} id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2><T keyPath="contact.title" /></h2>
            <p className="section-subtitle"><T keyPath="contact.subtitle" /></p>
          </div>

          <div className="contact-container">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={translate("contact.form.name")}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={translate("contact.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={translate("contact.form.message")}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn"><T keyPath="contact.form.submit" /></button>
              </form>
            </div>
            <div className="contact-info">
              <h3><T keyPath="contact.info.title" /></h3>
              <p><T keyPath="contact.info.description" /></p>
              
              <div className="contact-options">
                <div className="contact-option">
                  <div className="option-icon email"></div>
                  <div className="option-content">
                    <h4><T keyPath="contact.info.email" /></h4>
                    <p><T keyPath="contact.info.emailAddress" /></p>
                  </div>
                </div>

                <div className="contact-option">
                  <div className="option-icon location"></div>
                  <div className="option-content">
                    <h4><T keyPath="contact.info.location" /></h4>
                    <p><T keyPath="contact.info.locations" /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;