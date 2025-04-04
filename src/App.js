import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Contact from './components/contact';

// Temporary placeholder component for routes we haven't built yet
const ComingSoon = () => (
  <div style={{ padding: '120px 20px 60px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h1 style={{ fontSize: '3rem', fontWeight: '300', marginBottom: '1rem', color: '#002033' }}>Coming Soon</h1>
    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: '#555' }}>We're working hard to bring you amazing AI solutions. This page is currently under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ComingSoon />} />
          <Route path="/solutions" element={<ComingSoon />} />
          <Route path="/case-studies" element={<ComingSoon />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service detail pages */}
          <Route path="/services/agentic-ai" element={<ComingSoon />} />
          <Route path="/services/computer-vision" element={<ComingSoon />} />
          <Route path="/services/llms" element={<ComingSoon />} />
          <Route path="/services/edge-solutions" element={<ComingSoon />} />
          <Route path="/services/ui-ux" element={<ComingSoon />} />
          
          {/* Legal pages */}
          <Route path="/privacy" element={<ComingSoon />} />
          <Route path="/terms" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
