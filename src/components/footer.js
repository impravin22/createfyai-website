import '../css/footer.css';
import React from 'react';
import { T } from './Translation';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="footer-container">
          <p><T keyPath="footer.copyright" /></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;