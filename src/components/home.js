import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

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
          <h1>Taiwan AI Consultancy Services</h1>
          <p>AI Automation Solutions for Business Growth – Custom Tools, Streamlined Operations, and Expert Analytics. Co-owned by Engineers to Maximize Your Investment and Deliver Unmatched Value.</p>
          <button onClick={() => scrollToSection('contact')}>Contact our experts</button>
        </div>
      </section>

      {/* Strategies Section */}
      <section id="strategies-intro-section" className="strategies-intro-section">
        <div className="strategies-intro-container">
          <h2>Strategies to maximize AI Value</h2>
          <p>AI Development for E-commerce, Hardware, Supermarkets, Automated Factories, Software Companies and SaaS without expensive fees or middle man</p>
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
              <h3>AI Conversational Intelligence</h3>
              <p>Full autonomous chatbots, sentiment analysis and big data processing. Knowledge distillation approach and others are our main tools</p>
            </div>
          </div>
          
          <div className="strategy-grid-item">
            <div className="strategy-image">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=scale-down/Aq2W0EP68Qc2ZLxz/avinftmarketer_create_a_cover_image_for_a_podcast_for_financi_260a3f46-e4a0-4b2e-8ea9-5d38df7654a8_3-YX4l471gyKhgR8KY.png" alt="Business Transformation" />
            </div>
            <div className="strategy-content">
              <h3>Reshape Business Functions</h3>
              <p>In our lab we analyze business oriented solutions to improve your company. We integrate into your workflows with our comprehensive suite of AI services.</p>
            </div>
          </div>
          
          <div className="strategy-grid-item">
            <div className="strategy-image">
              <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=scale-down/Aq2W0EP68Qc2ZLxz/image-7-AMq1q3lJeKFEpB4n.png" alt="Industry Solutions" />
            </div>
            <div className="strategy-content">
              <h3>Industry-Specific Solutions</h3>
              <p>No matter if it's textiles, high-tech apps, smart manufacture, business insights with 10 years of experience, we streamline to provide you the right tools on time.</p>
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
          <h2>Empowering Businesses with AI</h2>
          
          <div className="partners-logos">
            <div className="partner-logo">
              <img src="/createfyAI_images/odintech.svg" alt="Odintech" />
            </div>
            <div className="partner-logo">
              <img src="/createfyAI_images/neurelli.svg" alt="Neurelli AI" />
            </div>
            <div className="partner-logo">
              <img src="/createfyAI_images/agoda.svg" alt="Agoda" />
            </div>
            <div className="partner-logo">
              <img src="/createfyAI_images/edelwess_air.svg" alt="Edelweiss Air" />
            </div>
            <div className="partner-logo">
              <img src="/createfyAI_images/magma.svg" alt="Magma" />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach-section" className="createfy-approach-section">
        <div className="approach-container">
          <h2>CreatefyAi Approach</h2>
          
          <div className="approach-grid">
            <div className="approach-grid-item">
              <div className="approach-image">
                <img src="https://assets.zyrosite.com/Aq2W0EP68Qc2ZLxz/20250323_1705_innovative-team-collaboration_simple_compose_01jq140jyrext851jjj3rtpqe5-mjE7xPRReqsP4z6Z.gif" alt="Efficient Small Team" />
              </div>
              <div className="approach-content">
                <h3>Efficient Small team</h3>
                <p>As a co-op, we're fully owned and operated by our engineers, ensuring you get direct access to the creators of your solution without middleman fees.</p>
              </div>
            </div>
            
            <div className="approach-grid-item">
              <div className="approach-image">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,fit=scale-down/Aq2W0EP68Qc2ZLxz/595826b9-fde1-4f2f-8cd9-9df4fb537c57-AGB2qX5VDnCE30GK.png" alt="Owned & Operated by Developers" />
              </div>
              <div className="approach-content">
                <h3>Owned & Operated by Developers</h3>
                <p>We deliver high-quality AI solutions on time, maximizing your ROI by providing top-tier results at a cost-effective rate.</p>
              </div>
            </div>
            
            <div className="approach-grid-item">
              <div className="approach-image">
                <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,fit=scale-down/Aq2W0EP68Qc2ZLxz/avinftmarketer_create_a_cover_image_for_a_podcast_for_financi_8bde1b10-fe5f-405a-beec-36422e01149e_1-YD0l0M0WO1HRv3Np.png" alt="On-Time Delivery" />
              </div>
              <div className="approach-content">
                <h3>On-Time Delivery- Your Investment Goes Further</h3>
                <p>Our small, agile team works quickly and efficiently, ensuring fast project turnaround with no unnecessary delays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Revolution Section - Tabbed Interface */}
      <section id="ai-revolution-section" className="ai-revolution-section">
        <div className="ai-revolution-container">
          <h2>Be ahead in the AI revolution</h2>
          <p className="ai-revolution-subtitle">Explore our AI solutions</p>
          
          <div className="ai-tabs-container">
            <div className="ai-tabs">
              <div className={`ai-tab ${activeSolutionTab === 'tab-agentic-rags' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-agentic-rags" defaultChecked onChange={() => handleSolutionTabClick('tab-agentic-rags')} />
                <label htmlFor="tab-agentic-rags" onClick={() => handleSolutionTabClick('tab-agentic-rags')}>AGENTIC RAGs</label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-computer-vision' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-computer-vision" onChange={() => handleSolutionTabClick('tab-computer-vision')} />
                <label htmlFor="tab-computer-vision" onClick={() => handleSolutionTabClick('tab-computer-vision')}>COMPUTER VISION</label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-llms' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-llms" onChange={() => handleSolutionTabClick('tab-llms')} />
                <label htmlFor="tab-llms" onClick={() => handleSolutionTabClick('tab-llms')}>LLMs</label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-data-engineering' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-data-engineering" onChange={() => handleSolutionTabClick('tab-data-engineering')} />
                <label htmlFor="tab-data-engineering" onClick={() => handleSolutionTabClick('tab-data-engineering')}>DATA ENGINEERING</label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-ui-ux' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-ui-ux" onChange={() => handleSolutionTabClick('tab-ui-ux')} />
                <label htmlFor="tab-ui-ux" onClick={() => handleSolutionTabClick('tab-ui-ux')}>UI/UX - WEB APP</label>
              </div>
              <div className={`ai-tab ${activeSolutionTab === 'tab-machine-learning' ? 'active' : ''}`}>
                <input type="radio" name="ai-tab" id="tab-machine-learning" onChange={() => handleSolutionTabClick('tab-machine-learning')} />
                <label htmlFor="tab-machine-learning" onClick={() => handleSolutionTabClick('tab-machine-learning')}>MACHINE LEARNING</label>
              </div>
            </div>
            
            <div className="ai-tab-content">
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-agentic-rags' ? 'active' : ''}`} id="content-agentic-rags">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3>Agentic RAGs (Retrieval-Augmented Generation)</h3>
                    <p>Our advanced RAG systems combine the power of information retrieval with generative AI to provide contextually accurate responses based on your organization's data. Perfect for knowledge bases, customer support, and internal documentation.</p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src="/createfyAI_images/Services/AgenticRAG.png" alt="RAG System Diagram" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-computer-vision' ? 'active' : ''}`} id="content-computer-vision">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3>Computer Vision</h3>
                    <p>Transform visual data into actionable insights with our computer vision solutions. From object detection and facial recognition to quality control and automated inspection, we build custom vision systems for manufacturing, retail, security, and healthcare applications.</p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2880,fit=crop/Aq2W0EP68Qc2ZLxz/nappy67_quantum_singularity_ai_transluscent_robots_virtual_re_c5f99879-c435-46a7-bf41-9eaf96ed32e9_2-mP4O4E4V9GtJwgyy.png" alt="Computer Vision Demo" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-llms' ? 'active' : ''}`} id="content-llms">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3>Large Language Models (LLMs)</h3>
                    <p>Leverage the power of custom-trained and fine-tuned language models for your specific industry needs. Our LLM solutions include content generation, summarization, classification, sentiment analysis, and domain-specific assistants that understand your business context.</p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src="/createfyAI_images/llm_architecture.png" alt="LLM Architecture" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-data-engineering' ? 'active' : ''}`} id="content-data-engineering">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3>Data Engineering</h3>
                    <p>Build robust data pipelines and infrastructure to fuel your AI initiatives. We design scalable data architectures, implement ETL processes, and develop data lakes/warehouses that form the foundation for reliable AI systems. Our solutions ensure your data is clean, accessible, and ready for analysis.</p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src="/createfyAI_images/data_pipeline.png" alt="Data Pipeline Architecture" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-ui-ux' ? 'active' : ''}`} id="content-ui-ux">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3>UI/UX - Web Applications</h3>
                    <p>Create intuitive and engaging interfaces for your AI-powered applications. Our design team builds user experiences that make complex AI capabilities accessible and valuable to end-users. From dashboards and visualization tools to interactive AI assistants, we ensure your solutions are both powerful and easy to use.</p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src="/createfyAI_images/ui_ux_design.png" alt="UI/UX Design Process" />
                  </div>
                </div>
              </div>
              
              <div className={`ai-tab-pane ${activeSolutionTab === 'tab-machine-learning' ? 'active' : ''}`} id="content-machine-learning">
                <div className="tab-content-flex">
                  <div className="tab-content-text">
                    <h3>Machine Learning</h3>
                    <p>Develop predictive models and decision systems tailored to your business challenges. Our machine learning solutions include demand forecasting, recommendation engines, anomaly detection, and optimization algorithms that drive efficiency and uncover insights from your data.</p>
                    <div className="tab-cta">
                      <button className="white-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
                    </div>
                  </div>
                  <div className="tab-content-image">
                    <img src="/createfyAI_images/ml_model_training.gif" alt="Machine Learning Model Training" />
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
          <h2>Our Global Team</h2>
          <p className="team-info-text">
            Our multilingual team works <strong>directly with you</strong>, <strong>avoiding the middle man fees</strong>, we provide best in class tailored services. Our team includes AI engineers, Machine Learning engineers, Project Managers, UI/UX designers and Business developers. We understand the culture and together we speak 4 languages: Chinese, English, Spanish, and Portuguese.
          </p>
          
          <div className="world-map">
            <img src="/createfyAI_images/world_map.svg" alt="World Map" style={{ maxWidth: '950px', width: '100%', margin: '20px auto' }}/>
          </div>
          
          <p className="team-locations">
            Offices in <strong>Peru</strong>, <strong>Taipei</strong> and <strong>India</strong>.
          </p>
        </div>
      </section>


      {/* Contact Form Section */}
      <section ref={contactRef} id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Connect With Our AI Experts</h2>
            <p className="section-subtitle">Let's discuss how AI can transform your business</p>
          </div>

          <div className="contact-container">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Get in Touch</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>Our team is ready to help with your AI project needs.</p>
              
              <div className="contact-options">
                <div className="contact-option">
                  <div className="option-icon email"></div>
                  <div className="option-content">
                    <h4>Email</h4>
                    <p>engineering@createfyai.com</p>
                  </div>
                </div>

                <div className="contact-option">
                  <div className="option-icon location"></div>
                  <div className="option-content">
                    <h4>Global Team</h4>
                    <p>Taipei • Peru • India</p>
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