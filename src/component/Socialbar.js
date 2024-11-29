import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function SocialBar() {
  return (
    <div className="social-bar d-flex justify-content-between align-items-center px-4 py-3 fixed-top" 
         style={{
           backgroundColor: '#f8f9fa', // Light background color for the cute look
           zIndex: 9, 
           fontSize: '0.8rem',
           height: '60px', // Increased height for the bar
           borderRadius: '10px', // Rounded corners for a cuter look
           boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for more visual appeal
           border: '1px solid #e0e0e0' // Light border for definition
         }}>
      {/* Left Side: Follow Us with Social Icons */}
      <div className="d-flex align-items-center">
        <span className="follow-us-text me-2" style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>Follow Us:</span>
        <a href="https://facebook.com" className="social-icon mx-2" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.4rem', color: '#3b5998' }}>
          <FaFacebook />
        </a>
        <a href="https://twitter.com" className="social-icon mx-2" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.4rem', color: '#00acee' }}>
          <FaTwitter />
        </a>
        <a href="https://instagram.com" className="social-icon mx-2" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.4rem', color: '#e4405f' }}>
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" className="social-icon mx-2" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.4rem', color: '#0077b5' }}>
          <FaLinkedin />
        </a>
      </div>

      {/* Right Side: Language Selector */}
      <div className="language-selector d-flex align-items-center">
        <label htmlFor="language-select" className="me-2" style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>Language:</label>
        <select id="language-select" className="form-select form-select-sm" style={{ fontSize: '0.8rem', borderRadius: '5px', width: '120px' }}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>
    </div>
  );
}

export default SocialBar;
