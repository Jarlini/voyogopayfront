import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../component/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Social Media Links - Aligned to the left */}
                <div className="social-links"style={{ marginRight:'90px' }}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="mailto:jalujalu998@example.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                </div>
                
                {/* Centered Heading */}
                
       <div className="container my-2" >
        <div className="md-0 bg-white rounded-lg p-4 shadow-lg border-teal border">
        <h1 
  className="text-center animated-heading mb-0" 
  style={{ fontSize: "2.5rem" }}>
  Begin Your Sacred Adventure!..
</h1>
 
        </div>
      </div> *
                {/* Copyright - Aligned to the right */}
                <div className="copyright" style={{ color:'white',fontSize:'20px'}}>
                    © {new Date().getFullYear()} Voyago. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
